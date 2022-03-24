import { Crown } from './crown'
import { RotatingPlatform } from './rotatingPlatform'

// Base
const base = new Entity()
base.addComponent(new GLTFShape('models/baseLight.glb'))
base.addComponent(new Transform({ scale: new Vector3(2, 1, 2) }))
engine.addEntity(base)

const staticPlatforms = new Entity()
staticPlatforms.addComponent(new GLTFShape('models/staticPlatforms.glb'))
staticPlatforms.addComponent(new Transform())
engine.addEntity(staticPlatforms)

// Stage 1 (Roundabouts)
const roundaboutAShape = new GLTFShape('models/roundaboutA.glb')

const roundaboutA1 = new RotatingPlatform(
  roundaboutAShape,
  new Transform({ position: new Vector3(5.5, 3, 9.75) }),
  Quaternion.Euler(0, 120, 0)
)

const roundaboutB = new RotatingPlatform(
  new GLTFShape('models/roundaboutB.glb'),
  new Transform({ position: new Vector3(5.5, 3, 17.25) }),
  Quaternion.Euler(0, -120, 0)
)

const roundaboutA2 = new RotatingPlatform(
  roundaboutAShape,
  new Transform({ position: new Vector3(5.5, 3, 24.75) }),
  Quaternion.Euler(0, 120, 0)
)

const bridge1 = new RotatingPlatform(
  new GLTFShape('models/bridgeA.glb'),
  new Transform({ position: new Vector3(10.5, 6.5, 29.5) }),
  Quaternion.Euler(0, 0, -90)
)

// Stage 2 (Wheels)
const wheelAShape = new GLTFShape('models/wheelA.glb')

const wheel1 = new RotatingPlatform(
  wheelAShape,
  new Transform({ position: new Vector3(15.5, 5.5, 24.325) }),
  Quaternion.Euler(0, 0, 45)
)

const wheel2 = new RotatingPlatform(
  new GLTFShape('models/wheelB.glb'),
  new Transform({ position: new Vector3(15.5, 5.5, 16.325) }),
  Quaternion.Euler(0, 0, -45)
)

const wheel3 = new RotatingPlatform(
  wheelAShape,
  new Transform({ position: new Vector3(15.5, 5.5, 7.825) }),
  Quaternion.Euler(0, 0, 45)
)

// Stage 3 (Barriers)
const bridge2 = new RotatingPlatform(
  new GLTFShape('models/bridgeB.glb'),
  new Transform({ position: new Vector3(21, 8.25, 2.5) }),
  Quaternion.Euler(90, 0, 0)
)

const barrier1 = new RotatingPlatform(
  new GLTFShape('models/barrierA.glb'),
  new Transform({ position: new Vector3(27, 9.7, 7.5) }),
  Quaternion.Euler(0, 90, 0)
)

const barrier2 = new RotatingPlatform(
  new GLTFShape('models/barrierB.glb'),
  new Transform({ position: new Vector3(23.5, 10.7, 15) }),
  Quaternion.Euler(0, -90, 0)
)

const barrier3 = new RotatingPlatform(
  new GLTFShape('models/barrierC.glb'),
  new Transform({ position: new Vector3(27, 11.7, 22.5) }),
  Quaternion.Euler(0, 90, 0)
)

// Crown
const crown = new Crown(
  new GLTFShape('models/crown.glb'),
  new Transform({ position: new Vector3(27, 13.75, 28.5) })
)
