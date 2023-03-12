import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { asciiShader, vertexShader } from '~/webgl/shaders/ASCIIShader'

export default class Postprocessing {
  private uniforms = {
    time: {
      type: 'f',
      value: 1.0,
    },
    resolution: {
      type: 'v2',
      value: new THREE.Vector2(),
    },
    charsize: {
      type: 'f',
      value: 3,
    },
    brightness: {
      type: 'f',
      value: 0.3,
    },
  }

  private asciiShaderMaterial: THREE.ShaderMaterial | undefined
  private composer: EffectComposer | undefined
  private asciiPass: ShaderPass | undefined
  private fxaaPass: ShaderPass | undefined
  private clock: THREE.Clock

  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.Camera

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    // setup needed objects
    this.renderer = renderer
    this.scene = scene
    this.camera = camera
    this.clock = new THREE.Clock()

    this.uniforms.resolution.value.x = window.innerWidth
    this.uniforms.resolution.value.y = window.innerHeight

    this.setupComposer()
  }

  private setupComposer() {
    this.asciiShaderMaterial = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader: asciiShader,
    })

    this.composer = new EffectComposer(this.renderer)
    const renderPass = new RenderPass(this.scene, this.camera)
    this.composer.addPass(renderPass)
    // ASCII
    this.asciiPass = new ShaderPass(this.asciiShaderMaterial, 'media')
    this.asciiShaderMaterial.uniforms.media = this.composer.renderTarget1
    // FXAA
    this.fxaaPass = new ShaderPass(FXAAShader)

    const pixelRatio = this.renderer.getPixelRatio()

    this.fxaaPass.material.uniforms.resolution.value.x = 1 / (window.innerWidth * pixelRatio)
    this.fxaaPass.material.uniforms.resolution.value.y = 1 / (window.innerHeight * pixelRatio)

    this.composer.addPass(this.fxaaPass)
    this.composer.addPass(this.asciiPass)
  }

  public render(delta: number) {
    this.composer?.render(delta)
    if (this.asciiShaderMaterial) this.asciiShaderMaterial.uniforms.time.value = this.clock.getElapsedTime()
  }

  public resize() {
    this.composer?.setSize(window.innerWidth, window.innerHeight)

    this.asciiShaderMaterial!.uniforms.resolution.value.x = window.innerWidth
    this.asciiShaderMaterial!.uniforms.resolution.value.y = window.innerHeight

    const pixelRatio = this.renderer.getPixelRatio()

    this.fxaaPass!.material.uniforms.resolution.value.x = 1 / (window.innerWidth * pixelRatio)
    this.fxaaPass!.material.uniforms.resolution.value.y = 1 / (window.innerHeight * pixelRatio)
  }
}
