import {StyleSheet} from 'react-native'
import {width} from 'react-native-dimension'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  box: {
    width: width(30),
    height: width(30),
    backgroundColor: 'red'
  },
  scroll: {
    flex: 1,
    opacity: 1
  },
  fakeContent: {
    height: 3000,
    backgroundColor: 'tomato'
  }
})
export default styles
