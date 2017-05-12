import React, {Component} from 'react'
import {
  Navigator,
} from 'react-native-deprecated-custom-components'

import App from './app.js'
import Search from './components/Search.js'
import Details from './components/Details.js'


//test routing navigator
import TestRoute from './components/TestRoute.js'
import TestRoute2 from './components/TestRoute2.js'


class  IndexApp extends Component {


  constructor(){
    super()
    this._renderScene = this._renderScene.bind(this)
  }

  _renderScene(route, navigator) {

    switch (route.ident) {
      case 'App':
        return <App navigator={navigator} />
      case 'Search':
        return <Search navigator={navigator} />
      case 'Details':
        return <Details navigator={navigator}  {...route.passProps} />


      //test routing
      case 'TestRoute':
        return <TestRoute navigator={navigator} />
      case 'secondPage':
        return <TestRoute2 navigator={navigator}  />
    }

  }
  render() {
    return (
      <Navigator
        initialRoute={{ident: 'App'}}
        renderScene={this._renderScene}
      />
    )
  }
}

export default IndexApp
