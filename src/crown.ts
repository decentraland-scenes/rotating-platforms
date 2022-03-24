import * as utils from '@dcl/ecs-scene-utils'

export class Crown extends Entity {
  constructor(model: GLTFShape, transform: Transform) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)
    this.addComponent(new AudioSource(new AudioClip('sounds/win.mp3')))

    // Create trigger for crown
    this.addComponent(
      new utils.TriggerComponent(
        new utils.TriggerBoxShape(new Vector3(2.5, 2.5, 2.5)),
        {
          onCameraEnter: () => {
            // Hide the crown and play sound
            this.getComponent(Transform).scale.setAll(0)
            this.getComponent(AudioSource).playOnce()
          },
          onCameraExit: () => {
            this.getComponent(utils.TriggerComponent).enabled = false
          }
        }
      )
    )
  }
}
