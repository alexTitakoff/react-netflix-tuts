import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'



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
  constructor
  render(){
    return (
      <View>
        <TextInput
          value={this.state.text}
          onChangeText={(text)=> this.filter(text)}
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="grey"
        />

        <TouchableWithoutFeedback>
          <View>
            <Text>Cancel</Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    )
  }
}

export default Search
