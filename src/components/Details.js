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
    const {name} = this.props.item
    const {thumbnail, cast, description, year, season,numOfEpisodes} = this.props.item.details
    return(
      <ScrollView>
        <Image
          style = {styles.thumbnail}
          source = {{uri: thumbnail}}
        >

        <View style={styles.buttonPlay}>
          <TouchableWithoutFeedback onPress={null} >
            <View>
              <Icon
                style={styles.iconPlay}
                name="play-circle"
                size={50}
                color="white"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        </Image>

        <View style={styles.descriptionContainer} >
          <View style={styles.subtitle} >
              <Text style={styles.text, styles.subTitleText} >{year}</Text>
              <Text style={styles.text, styles.subTitleText} >{numOfEpisodes}</Text>
              <Text style={styles.text, styles.subTitleText}>{season} Season</Text>
          </View>
        </View>
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
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',

  },
  iconPlay: {
    opacity: 0.7,
  },
  descriptionContainer: {
    paddingHorizontal: 20
  },
  subtitle: {
    flexDirection: 'row'
  },
  subTitleText: {
    marginRight: 5
  }

})

export default Details
