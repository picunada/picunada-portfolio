import * as THREE from 'three'

export default class Light {
  private camera: THREE.Camera
  private scene: THREE.Scene

  public directionalLight: THREE.DirectionalLight
  public ambientLight: THREE.AmbientLight
  public pointLight: THREE.PointLight

  constructor(camera: THREE.Camera, scene: THREE.Scene) {
    this.directionalLight = new THREE.DirectionalLight(0xffffff)
    this.ambientLight = new THREE.AmbientLight(0xbf6bff, 0.01)
    this.pointLight = new THREE.PointLight(0xbf6bff)

    this.camera = camera
    this.scene = scene

    this.setup()
  }

  private setup() {
    this.scene.add(this.directionalLight)
    this.directionalLight.position.set(-10, 5, 0)
    this.directionalLight.intensity = 0.8

    this.scene.add(this.ambientLight)
    this.ambientLight.intensity = 0.1

    this.scene.add(this.pointLight)
    this.pointLight.intensity = 1
  }

  public onMouseMove(event: MouseEvent) {
    // Update the mouse variable
    event.preventDefault()

    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1

    // Make the sphere follow the mouse
    const vector = new THREE.Vector3(x, y, 0.5)
    vector.unproject(this.camera)
    const dir = vector.sub(this.camera.position).normalize()
    const distance = -this.camera.position.z / dir.z
    const pos = this.camera.position.clone().add(dir.multiplyScalar(distance))
    // mouseMesh.position.copy(pos)

    this.pointLight.position.copy(new THREE.Vector3(pos.x, pos.y, pos.z - 1))
  }
}
