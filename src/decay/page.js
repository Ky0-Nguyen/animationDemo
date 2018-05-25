import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, _panResponder} =props
  const animatedStyles ={
    transform: animation.getTranslateTransform()
  }
    return (
      <View style={styles.container}>
          <Animated.View 
            style={[styles.box, animatedStyles]}
            {..._panResponder.panHandlers}
          />
      </View>
    )
  
}