import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page (props) {
  const {animation} = props
  const animatedStyles = {
    opacity: animation
  }
  return (
    <View></View>
  )
}
