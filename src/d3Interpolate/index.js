import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
import {interpolateNUmber, interpolateRgb} from 'd3-interpolate'

export default class demo1 extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  render () {
    return (
      <Page animation={this.state.animation}/>
    )
  }
}
