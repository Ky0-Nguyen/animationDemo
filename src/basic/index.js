import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
export default class demo1 extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animation: new Animated.Value(1)
    }
  }
  startAnimation =()=> {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350
    }).start((()=>{
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start()
    }))
  }
  render() {
    return (
      <Page startAnimation={this.startAnimation} animation={this.state.animation}/>
    )
  }
}