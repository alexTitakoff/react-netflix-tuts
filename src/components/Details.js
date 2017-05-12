import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')

class Details extends Component {

  render(){
  
    const {thumbnail} = this.props.item.details
    return(
      <ScrollView>
        <Image
          style = {styles.thumbnail}
          source = {{uri: thumbnail}}
        />
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  thumbnail: {
    width: width,
    height: 300
  }
})

export default Details
