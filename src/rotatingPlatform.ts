import * as utils from '@dcl/ecs-scene-utils'

export class RotatingPlatform extends Entity {
  constructor(model: GLTFShape, transform: Transform, rotation: Quaternion) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)
    this.addComponent(new utils.KeepRotatingComponent(rotation))
  }
}
