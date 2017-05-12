import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,

} from 'react-native'

import SideMenu from 'react-native-side-menu'

import List from './components/List.js'
import Slider from './components/Slider.js'
import Header from './components/Header.js'
import Menu from './components/Menu.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.navigate = this.navigate.bind(this)
  }

  updateMenu(isOpen) {
    this.setState({isOpen})
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  //обработчик навигатора
  navigate(ident){
    this.props.navigator.push({
      ident
    })
  }

  render() {
    return(
      <View  style={styles.container} >
        <SideMenu
          menu={<Menu/>}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >

        <View style={styles.container} >
          <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)} ></Header>
          <Slider></Slider>
          <List></List>
        </View>

        </SideMenu>

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
