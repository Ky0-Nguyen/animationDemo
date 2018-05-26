import React from 'react'
import Page from './page'
import { Actions } from 'react-native-router-flux'


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.data= [
      {key: '0', title: 'basic', action: this.handleBasic},
      {key: '1', title: 'transform', action: this.handleTranfrom},
      {key: '2', title: 'scale', action: this.handleScale},
      {key: '3', title: 'background', action: this.handleBackground},
      {key: '4', title: 'rotate', action: this.handleROtate},
      {key: '5', title: 'scroll', action: this.handleScrollview},
      {key: '6', title: 'decay', action: this.handleDecay},
      {key: '7', title: 'parallel', action: this.handleParallel},
      {key: '8', title: 'stagger', action: this.handleStagger},
      {key: '9', title: 'Create Animated Component', action: this.handleCreateAnimatedComponent},
      {key: '10', title: 'Using Set Native Props', action: this.handleUsingSetNativeProps},
    ]
  }

  handleBasic = () => {
    Actions.basic()
  }
  handleTranfrom =()=>{
    Actions.transform()
  }
  handleScale =()=>{
    Actions.scale()
  }
  handleBackground =() => {
    Actions.background()
  }
  handleROtate =() =>{
    Actions.rotate()
  }
  handleScrollview =() =>{
    Actions.scroll()
  }
  handleDecay =() =>{
    Actions.decay()
  }
  handleParallel =() =>{
    Actions.parallel()
  }
  handleStagger =() =>{
    Actions.stagger()
  }
  handleCreateAnimatedComponent =()=>{
    Actions.createAnimatedComponent()
  }
  handleUsingSetNativeProps=()=>{
    Actions.usingSetNativeProps()
  }
  render(){
    return (
      <Page data={this.data}/>
    )
  }
}