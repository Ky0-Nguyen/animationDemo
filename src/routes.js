import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Screens
import Home from './Home'
import Basic from './basic'
import Transform from './transform'
import Scale from './scale'
import Background from './background'
import Rotate from './rotate'
import Scroll from './scrollview'
import Decay from './decay'
import Parallel from './parallel'
import Stagger from './stagger'
import CreateAnimatedComponent from './CreateAnimatedComponent'
import UsingSetNativeProps from './UsingSetNativeProps'
import D3Interpolate from './d3Interpolate'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
    <Scene key="home" component={Home} initial={true}/>
    <Scene key="basic" component={Basic} />
    <Scene key="scale" component={Scale} />
    <Scene key="transform" component={Transform} />
    <Scene key="background" component={Background} />
    <Scene key="rotate" component={Rotate} />
    <Scene key="scroll" component={Scroll} />
    <Scene key="decay" component={Decay} />
    <Scene key="parallel" component={Parallel} />
    <Scene key="stagger" component={Stagger} />
    <Scene key="createAnimatedComponent" component={CreateAnimatedComponent} />
    <Scene key="usingSetNativeProps" component={UsingSetNativeProps} />
    <Scene key="d3Interpolate" component={D3Interpolate} initial={true}/>
  </Scene>
)

export default scenes
