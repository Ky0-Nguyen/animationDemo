import React from 'react'
import {View,Text, TouchableWithoutFeedback, FlatList} from 'react-native'
import styles from './styles'

export default function page (props) {
  const {data} = props
  console.log(data)
  const renderItems = ({item}) =>(
    <TouchableWithoutFeedback onPress={item.action}>
      <View style={styles.containerItems}>
        <Text>{item.title}</Text>
      </View> 
    </TouchableWithoutFeedback>   
  )
  
  return (
    <FlatList data={data} renderItem={renderItems}/>
  )
}