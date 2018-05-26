import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, startAnimation, AnimatedButton, setRefs} =props
  const animatedColor =animation.interpolate({
    inputRange: [0,1],
    outputRange: ['red', 'green']
  })
    return (
      <View style={styles.container}>
        <AnimatedButton title={'Press me'} ref={setRefs} onPress={startAnimation} color={animatedColor}/>
        {/* <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}/>
        </TouchableWithoutFeedback> */}
      </View>
    )
  
}