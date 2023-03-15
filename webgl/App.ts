import * as THREE from 'three'

import type { Group } from 'three'

import CameraControls from '~/webgl/utils/Controls'
import Time from '~/webgl/utils/Time'
import Light from '~/webgl/objects/Light'
import Airplane from '~/webgl/objects/Airplane'
import SceneCamera from '~/webgl/objects/Camera'
import Postprocessing from '~/webgl/utils/Postprocessing'
import HillsPlane from '~/webgl/objects/HillsPlane'

export default class App {
  // Three objects
  private canvas: HTMLElement
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: SceneCamera

  // Utils objects
  private time: Time
  private postprocessing: Postprocessing
  private cameraControls: CameraControls | undefined

  // Objects
  private light: Light
  private airplane: Airplane
  private hills: HillsPlane

  public loaded: Ref<boolean> = useState('loaded', () => false)

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      powerPreference: 'low-power',
      antialias: true,
      alpha: true,
    })

    this.setupRenderer()
    this.time = new Time()

    this.scene = new THREE.Scene()
    // Add camera to scene
    this.camera = new SceneCamera(this.scene)

    // Postprocessing
    this.postprocessing = new Postprocessing(this.renderer, this.scene, this.camera.main as THREE.PerspectiveCamera)

    ////////////////////////////////////

    // Add lights to scene
    this.light = new Light(this.camera.main as THREE.PerspectiveCamera, this.scene)

    // Add objects to scene
    this.airplane = new Airplane()
    this.airplane.loadModels(() => {
      this.scene.add(this.airplane.airplane as Group)
      console.log(this.airplane.airplane)
      this.airplane.setAnimations()
      this.airplane.setupModel()
      this.airplane.airplane?.children[0].position.set(0, 0, 0)
      this.loaded.value = true
    })

    this.hills = new HillsPlane(this.scene)

    // UI

    // Start

    this.time.animate((delta) => this.update(delta))

    window.addEventListener('resize', () => this.resize())
    window.addEventListener('mousemove', (event) => this.light.onMouseMove(event))
  }

  private setupRenderer() {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.toneMappingExposure = 0.6
  }

  private update(delta: number) {
    this.renderer.render(this.scene, this.camera.main as THREE.PerspectiveCamera)
    // this.postprocessing.render(delta)

    if (this.airplane.animationMixer) this.airplane.update(delta)

    this.hills.update(delta * 0.6)
  }

  private resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.postprocessing.resize()
    this.camera.resize()

    this.renderer.pixelRatio = devicePixelRatio
  }
}
