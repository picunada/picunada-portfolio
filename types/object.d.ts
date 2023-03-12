export interface ThreeObjectProtocol {
  public update(delta: number): void
  public resize(): void
}

declare type ThreeObject = ThreeObjectProtocol
