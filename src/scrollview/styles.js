import {StyleSheet} from 'react-native'
import {width, height} from 'react-native-dimension'
const styles  = StyleSheet.create({
 container: {
   flex:1,
   alignItems: 'center',
   justifyContent: 'center'
 },
 box: {
   width: width(30),
   height: width(30),
   backgroundColor: 'red'
 }
})
export default styles