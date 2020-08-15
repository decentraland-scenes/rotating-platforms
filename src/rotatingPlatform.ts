import utils from "../node_modules/decentraland-ecs-utils/index"

export class RotatingPlatform extends Entity {
  constructor(model: GLTFShape, transform: Transform, rotation: Quaternion) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)
    this.addComponent(new utils.KeepRotatingComponent(rotation))
  }
}