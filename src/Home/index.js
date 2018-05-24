import React from 'react'
import Page from './page'
import { Actions } from 'react-native-router-flux'


export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.data= [
      {key: '0', title: 'basic', action: this.handleBasic},
      {key: '1', title: 'transform', action: this.handleTranfrom},
      {key: '2', title: 'scale', action: this.handleScale}
    ]
  }
  handleBasic =()=>{
    Actions.basic()
  }
  handleTranfrom =()=>{
    Actions.transform()
  }
  handleScale =()=>{
    Actions.scale()
  }
  render(){
    return (
      <Page data={this.data}/>
    )
  }
}