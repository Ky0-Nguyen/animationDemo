import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
import {interpolateNumber, interpolateRgb, interpolateZoom} from 'd3-interpolate'
import styles from './styles'

export default class demo1 extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      animation: new Animated.Value(0)
    }
  }

  setRefs =(ref)=> { this._view = ref }

  componentDidMount(){
    const positionInterpolate = interpolateNumber(0,200)
    const colorInterpolate = interpolateRgb('rgb(255,99,71)','rgb(0,71,255')
    const zoomInterpolate = interpolateZoom(1,2)
    this.state.animation.addListener(({value})=>{
      const position = positionInterpolate(value)
      const color = colorInterpolate(value)
      const zoom = zoomInterpolate(value)

      const style=[
        styles.box,
        {
          backgroundColor : color,
          transform :[{
            translateY: position,
            scale: value
          }]
        }
      ]
      this._view.setNativeProps({ style })
    })
  }

  startAnimation =()=> {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1350
    }).start((()=>{
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start()
    }))
  }

  render () {
    return (
      <Page animation={this.state.animation} setRefs={this.setRefs} startAnimation={this.startAnimation}/>
    )
  }
}
