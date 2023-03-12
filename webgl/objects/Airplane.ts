import * as THREE from 'three'
import type { Group } from 'three'
import GSAP from 'gsap'
import Loader from '~/webgl/utils/Loader'
import type { ThreeObject } from '~/types/object'

export default class Airplane implements ThreeObject {
  private loader: Loader
  private lerpRotation = {
    x: 0,
    y: 0,
    target: 0,
    ease: 0.1,
  }

  public airplane: THREE.Group | undefined
  public animations: THREE.AnimationClip[] | undefined
  public animationMixer: THREE.AnimationMixer | undefined

  constructor() {
    this.loader = new Loader()

    window.addEventListener('mousemove', event => this.onMouseMove(event))
  }

  public loadModels(callback: () => void) {
    this.loader.loadModel('/models/airplane_v4.glb', (file) => {
      this.airplane = new THREE.Group()
      this.airplane.rotation.set(0, 0, 0)
      this.airplane.add(file.scene.children[0] as THREE.Group)

      this.airplane?.children[0].children
      this.animations = file.animations
      callback()
    })
  }

  private onMouseMove(event: MouseEvent) {
    const rotationY = ((event.clientY - window.innerHeight / 2) * 2) / window.innerHeight
    const rotationX = ((event.clientX - window.innerWidth / 2) * 2) / window.innerWidth
    // console.log(rotationX)
    this.lerpRotation.x = rotationX * 0.4
    this.lerpRotation.y = rotationY * 0.4
  }

  public setupModel() {
    this.airplane?.scale.set(0.1, 0.1, 0.1)
    this.airplane?.position.set(0, 0, 0)

    // body
    this.airplane!.children[0].children[0].castShadow = true
    this.airplane!.children[0].children[0].receiveShadow = false

    this.airplane!.children[0].children[1].castShadow = true
    this.airplane!.children[0].children[1].receiveShadow = true
    this.airplane!.children[0].children[2].castShadow = true
    this.airplane!.children[0].children[2].receiveShadow = true
    this.airplane!.children[0].children[3].castShadow = true
    this.airplane!.children[0].children[3].receiveShadow = true

    // fan
    this.airplane!.children[0].children[4].children[0].material = new THREE.MeshPhysicalMaterial()
    this.airplane!.children[0].children[4].children[0].material.color = new THREE.Color(0xFFFFFF)
    this.airplane!.children[0].children[4].children[0].castShadow = true
    this.airplane!.children[0].children[4].children[0].receiveShadow = true
    // tail
    this.airplane!.children[0].children[5].receiveShadow = true
    this.airplane!.children[0].children[5].castShadow = true
    this.airplane!.children[0].children[6].castShadow = true
    this.airplane!.children[0].children[6].receiveShadow = true
    // wings
    this.airplane!.children[0].children[7].children[0].castShadow = true
    this.airplane!.children[0].children[7].children[0].receiveShadow = true
    this.airplane!.children[0].children[7].children[1].castShadow = true
    this.airplane!.children[0].children[7].children[1].receiveShadow = true
  }

  public setAnimations() {
    this.animationMixer = new THREE.AnimationMixer(this.airplane as Group)
    // fly animation setup
    const flyAnimation = this.animations![0]
    const fly = this.animationMixer.clipAction(flyAnimation)
    fly.timeScale = 0.8
    fly.play()
    // fan animation setup
    const fanAnimation = this.animations![4]
    const fan = this.animationMixer.clipAction(fanAnimation)
    fan.timeScale = 4
    fan.play()
  }

  public update(delta: number): void {
    const rotationY = GSAP.utils.interpolate(
      this.lerpRotation.y,
      this.lerpRotation.target,
      this.lerpRotation.ease,
    )

    const rotationX = GSAP.utils.interpolate(
      this.lerpRotation.x,
      this.lerpRotation.target,
      this.lerpRotation.ease,
    )

    this.airplane!.rotation.x = rotationX
    this.airplane!.rotation.z = rotationY

    this.animationMixer?.update(delta)
  }

  public resize(): void {
    throw new Error('Method not implemented.')
  }
}
