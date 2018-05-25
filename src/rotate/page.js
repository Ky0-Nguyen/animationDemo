import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, startAnimation} =props
  const rotateInterpolation = animation.interpolate({
    inputRange: [0,360],
    outputRange: ['0deg','9100000deg']
  })

  

  const boxAnimatedStyle= {
    transform:[
      { rotate:  rotateInterpolation  }
    ]
  }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, boxAnimatedStyle]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  
}