import * as THREE from 'three'
import type { ThreeObject } from '~/types/object'

export default class SceneCamera implements ThreeObject {
  private frustrum = 5
  private scene: THREE.Scene

  public object: THREE.PerspectiveCamera | undefined
  public main: THREE.PerspectiveCamera | undefined

  constructor(scene: THREE.Scene) {
    this.scene = scene

    this.setupCamera()
  }

  private setupCamera() {
    const aspect = window.innerWidth / window.innerHeight

    this.object = new THREE.PerspectiveCamera(35, aspect, 0.1, 2000)
    this.scene.add(this.object)
    // Adjust position of camera
    this.object.position.set(-14.3, 16.4, -20.2)
    this.object.rotation.set(-3.05, -0.5, 10)
    this.object.zoom = 0.6
    this.object.updateProjectionMatrix()

    this.main = new THREE.PerspectiveCamera(60, aspect, 0.1, 2000)

    this.scene.add(this.main)
    this.main.position.set(-4, 1.5, 0)
    this.main.rotation.set(0, -Math.PI / 2, 0)

    this.main.lookAt(this.scene.position)
    // const helper = new THREE.CameraHelper(this.main)
    // this.scene.add(helper)
  }

  public update() {}

  public resize() {
    const aspect = window.innerWidth / window.innerHeight
    this.object!.aspect = aspect
    this.object!.updateProjectionMatrix()
    this.main!.aspect = aspect
    this.main!.updateProjectionMatrix()
  }
}
