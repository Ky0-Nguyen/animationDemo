import React, { PureComponent } from 'react'

// Route of application
import scenes from './routes'
import { Router } from 'react-native-router-flux'

// Redux settin

export default class JBCWallet extends PureComponent {
  render () {
    return (
      <Router scenes={scenes}/>
    )
  }
}
