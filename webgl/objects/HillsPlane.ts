import * as THREE from 'three'
import { hillsShader } from '../shaders/HillsShader'
import type { ThreeObject } from '~/types/object'

export default class HillsPlane implements ThreeObject {
  private scene: THREE.Scene
  private uniforms = {
    time: {
      type: 'f',
      value: 0,
    },
  }

  private constTime = 1

  public object: THREE.Mesh | undefined

  constructor(scene: THREE.Scene) {
    this.scene = scene

    this.setup()
  }

  private setup() {
    const shaderMaterial = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: hillsShader.vertexShader,
      fragmentShader: hillsShader.fragmentShader,
      transparent: true,
    })

    this.object = new THREE.Mesh(new THREE.PlaneGeometry(256, 256, 256, 256), shaderMaterial)
    this.scene.add(this.object)
    this.object.position.set(0, -5, 0)
    this.object.rotation.set(0, -Math.PI * 1.5, 0)
    this.object.scale.set(0.5, 0.7, 0.5)
    this.object.receiveShadow = true
  }

  public update(delta: number) {
    this.uniforms.time.value += delta * this.constTime
  }

  public resize() {
    throw new Error('Method not implemented.')
  }
}
