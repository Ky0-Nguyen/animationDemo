import React from 'react'
import {Animated, PanResponder} from 'react-native'
import Page from './page'
export default class demo1 extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animation: new Animated.ValueXY(0)
    }
  }
  componentWillMount(){
    // this._x = 0
    // this._y = 0

    // this.state.animation.addListener((value)=> {
    //   this._x = value.x
    //   this._y = value.y
    // })
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ()=>  true,
      onMoveShouldSetPanResponder: ()=> true ,
      onPanResponderGrant: ()=>{
        // can use it change to code commanded
        this.state.animation.extractOffset()
        // this.state.animation.setOffset({
        //   x: this._x,
        //   y: this._y
        // })
        // this.state.animation.setValue({
        //   x : 0 ,
        //   y : 0
        // })
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy:  this.state.animation.y
        }
      ]),
      onPanResponderRelease:(e, {vx, vy}) => {
        Animated.decay( this.state.animation,{
          velocity: { x:  vx, y: vy },
          deceleration: 0.997
        }).start()
      }
    })
  }
  render() {
    return (
      <Page _panResponder={this._panResponder} animation={this.state.animation}/>
    )
  }
}