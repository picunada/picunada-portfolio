import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

export default class Loader {
  private GLTFLoader: GLTFLoader
  private DRACOLoader: DRACOLoader

  constructor() {
    this.GLTFLoader = new GLTFLoader()
    this.DRACOLoader = new DRACOLoader()

    this.setupLoaders()
  }

  private setupLoaders() {
    this.DRACOLoader.setDecoderPath('/draco/')
    this.GLTFLoader.setDRACOLoader(this.DRACOLoader)
    this.GLTFLoader.setMeshoptDecoder(MeshoptDecoder)
  }

  public loadModel(path: string, callback: (file: GLTF) => void) {
    this.DRACOLoader.preload()
    this.GLTFLoader.load(path, callback)
  }
}
