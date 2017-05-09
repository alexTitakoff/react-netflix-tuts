import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => (
    <View>
      <TouchableWithoutFeedback>
        <Icon
          name = "bars"
          color = "white"
          size = {25}
        >

        </Icon>
      </TouchableWithoutFeedback>
    </View>
)



export default Header
