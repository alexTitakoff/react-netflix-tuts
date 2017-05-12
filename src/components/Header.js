import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


class Header extends Component {

  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this)
  }

  //обработчик навигатора
  navigate(ident){
    this.props.navigator.push({
      ident
    })
  }


  render() {
    return  (
        <View style={styles.container} >
          <TouchableWithoutFeedback onPress= {() => this.props.toggle()} >
            <Icon
              name = "bars"
              color = "white"
              size = {25}
            />
          </TouchableWithoutFeedback>
          <Image style={styles.logo}  source = {require('../images/logo.png')}/>
          <TouchableWithoutFeedback onPress= {() => this.navigate('Search') }>
            <Icon
              name="search"
              color="white"
              size={25}
            />
          </TouchableWithoutFeedback>
          </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height : 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    backgroundColor: '#000'
  },
  logo: {
    width: 120,
    height: 40
  }

})


export default Header
