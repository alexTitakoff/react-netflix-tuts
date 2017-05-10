import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const {width, height} = Dimensions.get('window')

const shows_first = [
  {
    "key":1,
    "name":"Suits",
    "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg"
  },
  {
     "key":2,
     "name":"Modern Family",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
  },
  {
     "key":3,
     "name":"The Flash",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
  },
  {
     "key":4,
     "name":"Supergirl",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
  },
  {
     "key":5,
     "name":"Designated Survivor",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg"
   },
   {
     "key":6,
     "name":"24: Legacy",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
  }
]


class Search extends  Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Icon
            name = "search"
            color = "grey"
            size = {18}
            style = {styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            onChangeText={(text)=> this.filter(text)}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="grey"
          />

        <Icon
          name="times-circle"
          color="grey"
          size={18}
          style={styles.iconInputClose}
        />


        <TouchableWithoutFeedback style={styles.cancelButton} >
            <View style={styles.containerButton} >
              <Text style={styles.cancelButtonText} >Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header: {
    height: 40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'

  },
  searchIcon: {
    position: 'absolute',
    top: 5,
    left: 15,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  iconInputClose:{
    position: 'absolute',
    top: 5,
    right: 90,
    backgroundColor: 'transparent'
  },
  input: {
    width: width - (width/4),
    height: 30,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3,
  },
  cancelButtonText: {
    color: 'white',

  }

})

export default Search
