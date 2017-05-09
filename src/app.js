import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,

} from 'react-native'

import List from './components/List.js'
import Slider from './components/Slider.js'
import Header from './components/Header.js'

class App extends Component {
  render() {
    return(
      <View  style={styles.container} >
        <Header></Header>
        <Slider></Slider>
        <List></List>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})
export default App
