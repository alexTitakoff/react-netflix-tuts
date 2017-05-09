import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,

} from 'react-native'

import List from './components/List.js'
import Slider from './components/Slider.js'

class App extends Component {
  render() {
    return(
      <View  style={styles.container} >
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
