import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
import styles from './styles'
export default class demo1 extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animation: new Animated.Value(0)
    }
    this._enable = true
  }
 
  handleToggle =()=> {
    this._enable = !this._enable
    let style=[styles.scroll]
    if(!this._enable) {
      style.push({ opacity: 0  })
    } else {
      style.push({ opacity: 1  })
    }

    this.scroll.setNativeProps({
      scrollEnable: this._enable,
      style
    })
    console.log(this.scroll)
  }
  setRefs =(refs)=> { this.scroll = refs }
  render() {
    return (
      <Page  
      animation={this.state.animation} 
      handleToggle={this.handleToggle} 
      setRefs={this.setRefs}/>
    )
  }
}