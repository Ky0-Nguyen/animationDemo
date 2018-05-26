import React, {Component} from 'react'
import {View, Animated, TouchableOpacity, ScrollView, Text} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, handleToggle,setRefs} =props
  const bgInterpolate = animation.interpolate({
    inputRange: [0, 3000],
    outputRange: ['red','green']
  })

  const scrollStyle={
    backgroundColor: bgInterpolate
  }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleToggle}>
            <Text>Toggle</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scroll}
          ref={setRefs}
          scrollEventThrottle={16}
          onScroll={
            Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: animation
                  }
                }
              }
            ])
          }
        >
         <Animated.View style={[styles.fakeContent, scrollStyle]} />
        </ScrollView>
      </View>
    )
  
}