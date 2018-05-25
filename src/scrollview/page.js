import React, {Component} from 'react'
import {View, Animated,ScrollView, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, startAnimation} =props
  const boxInterpolation = animation.interpolate({
    inputRange: [0,1],
    outputRange: ['rgb(255,99,71)','rgb(99,71,255)']
  })

  const boxAnimatedStyle= {
    backgroundColor: boxInterpolation
  }
    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: animation
                }
              }
            }
          ])}
        >
        <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, boxAnimatedStyle]}/>
        </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    )
  
}