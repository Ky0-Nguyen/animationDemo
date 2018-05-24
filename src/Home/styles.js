import {StyleSheet} from 'react-native'
import {width, height} from 'react-native-dimension'
const styles  = StyleSheet.create({
  containerItems: {
    width: width(100),
    paddingVertical: height(3),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center', 
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  }
})
export default styles