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
//import IonIcons from 'react-ionicons'

const {width, height} = Dimensions.get('window')

class Details extends Component {

  render(){
    const {name} = this.props.item
    const {thumbnail, cast, description,creator , year, season,numOfEpisodes} = this.props.item.details
    return(
      <ScrollView style={styles.container} >
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
              <Text style={[styles.text, styles.subTitleText]} >{year}</Text>
              <Text style={[styles.text, styles.subTitleText]} >{numOfEpisodes}</Text>
              <Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
          </View>


          <View style={styles.description} >
            <Text style={styles.text} >{description}</Text>
          </View>

          <Text style={styles.text} >Cast: {cast}</Text>
          <Text style={styles.text} >Creator: {creator}</Text>

          <View style={styles.shareListIcons} >
            <View style={styles.myListIcon}>
              <Icon
                style={styles.listIcon}
                name="md-checkmark"
                color="grey"
                size={25}
              />
            </View>
            <View style={styles.myShareIcon} >
              <Icon
                style={styles.shareIcon}
                name="share-alt"
                color="grey"
                size={25}
              />
            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'

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
    backgroundColor: 'transparent'
  },
  descriptionContainer: {
    paddingHorizontal: 20
  },
  subtitle: {
    flexDirection: 'row'
  },
  subTitleText: {
    marginRight: 5,

  },
  text: {
    color: '#b3b3b3'
  },
  shareListIcons: {

  }

})

export default Details
