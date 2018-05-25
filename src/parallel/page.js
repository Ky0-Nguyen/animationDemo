import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
    const {startAnimation, animColor, animScale} =props
    const backgroundColorInterpolate  = animColor.interpolate({
      inputRange: [ 0,1 ],
      outputRange: ['rgb(255,99,71)','rgb(99,71,255)']
    })
    const boxStyle={
      backgroundColor: backgroundColorInterpolate,
      transform: [
        {  scale: animScale }
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, boxStyle]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  
}