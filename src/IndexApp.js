import React, {Component} from 'react'
import {
  Navigator,
} from 'react-native-deprecated-custom-components'

import App from './app.js'
import Search from './components/Search.js'


//test routing navigator
import TestRoute from './components/TestRoute.js'
import TestRoute2 from './components/TestRoute2.js'


class  IndexApp extends Component {

  // _renderScene(route,navgator) {
  //   var navigator = {navigator}
  //
  //   switch (route.ident) {
  //     case 'App':
  //       return (
  //         <App {...navigator} />
  //       )
  //     case 'Search':
  //       return (
  //         <Search {...navigator} />
  //        )
  //     case 'TestRoute':
  //        return (
  //          <TestRoute {...navigator} />
  //         )
  //     case 'secondPage':
  //        return (
  //          <TestRoute2 {...navigator} />
  //         )
  //   }
  // }



  constructor(){
    super()
    this._renderScene = this._renderScene.bind(this)
  }

  _renderScene(route, navigator) {

    switch (route.ident) {
      case 'TestRoute':
        return <TestRoute navigator={navigator} />
      case 'secondPage':
        return <TestRoute2 navigator={navigator}  />
    }

  }
  render() {
    return (
      <Navigator
        initialRoute={{ident: 'TestRoute'}}
        renderScene={this._renderScene}
      />
    )
  }
}

export default IndexApp
