import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'


const {width, height} = Dimensions.get('window')


class Menu extends Component {
  render(){
    return(
      <View style={styles.menu} >
        <View style={styles.avatarContainer} >
          <View  style={styles.avatarImage} >
            <Image
              style={styles.avatar}
              source={require('../images/user.png')}
            />
            <Text style={styles.name}>AlexTi</Text>
          </View>
          <Icon
            name="exchange"
            color="white"
            size={25}
          />
        </View>
        <ScrollView style={styles.scrollContainer} >
            <View style={styles.textWithIcon}>
                <View style={styles.withIcon} >
                    <Icon
                        style={styles.iconWithText}
                        name="download"
                        color="white"
                        size={28}
                    />
                  <Text style={styles.text} >My Downloads</Text>
                </View>
                <Icon
                  style={styles.rightIcon}
                  name="angle-right"
                  color="white"
                  size={25}
                />
            </View>


            <View style={styles.textWithIcon}>
                <View style={styles.withIcon} >
                    <IonIcons
                        style={styles.iconWithText}
                        name="md-check"
                        color="white"
                        size={28}
                    />
                  <Text style={styles.text} >My Lists</Text>
                </View>
                <Icon
                  style={styles.rightIcon}
                  name="angle-right"
                  color="white"
                  size={25}
                />
            </View>
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {

  },
  menu: {
    flex: 1
  }

})



export default Menu
