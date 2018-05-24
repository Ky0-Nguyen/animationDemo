import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Screens
import Home from './Home'
import Basic from './basic'
import Transform from './transform'
import Scale from './scale'

const scenes = Actions.create(
  <Scene key="root" hideNavBar hideTabBar>
      <Scene key="home" component={Home} initial={true}/>
      <Scene key="basic" component={Basic} />
      <Scene key="scale" component={Scale} />
  </Scene>
)

export default scenes