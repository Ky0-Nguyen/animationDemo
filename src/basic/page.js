import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, startAnimation} =props
  const animatedStyles ={
    opacity: animation
  }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  
}