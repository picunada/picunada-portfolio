import * as THREE from 'three'

export default class Time {
  public start: number = performance.now()
  public current: number = this.start
  public elapsed = 0
  public deltaTime = 0

  private clock: THREE.Clock = new THREE.Clock()

  constructor() {

  }

  public animate(callback: (deltaTime: number) => void) {
    callback(this.clock.getDelta())

    requestAnimationFrame(() => this.animate(callback))
  }
}
