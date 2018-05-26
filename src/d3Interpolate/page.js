import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page (props) {
  const {animation,startAnimation,setRefs} = props
  // const animatedStyles = {
  //   backgroundColor: animation.interpolate(
  //   {
  //    inputRange: [0, 1],
  //    outputRange: ['#111111','#f1f1f1']
  //   }),
  //   transform: [{
  //     translateY:  animation.interpolate({
  //       inputRange: [0,1],
  //       outputRange: [0,200]
  //     })
  //   }]
  // }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View ref={setRefs} style={ styles.box}/>
      </TouchableWithoutFeedback>
    </View>
  )
}
