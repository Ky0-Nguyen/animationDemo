import React from 'react'
import {Animated, Button} from 'react-native'
import Page from './page'

const AnimatedButton = Animated.createAnimatedComponent(Button)

export default class CreateAnimatedComponent extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animation: new Animated.Value(0)
    }
  }

  setRefs =(ref)=> { this.btn = ref }

 
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
      <Page 
      setRefs={this.setRefs}
      startAnimation={this.startAnimation} 
      AnimatedButton={AnimatedButton} 
      animation={this.state.animation}/>
    )
  }
}