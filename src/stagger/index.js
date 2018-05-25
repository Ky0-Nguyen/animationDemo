import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
export default class demo1 extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animColor: new Animated.Value(0),
      animScale: new Animated.Value(1)
    }
  }
  startAnimation =()=> {
    Animated.stagger(200,[
      Animated.timing(this.state.animColor, {
        toValue: 1,
        duration: 350
      }),
      Animated.timing(this.state.animScale, {
        toValue: 2,
        duration: 1500
      })
    ]).start()
  }
  render() {
    return (
      <Page startAnimation={this.startAnimation}  animColor = {this.state.animColor} animScale={this.state.animScale}/>
    )
  }
}