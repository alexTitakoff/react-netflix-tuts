
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Container, Content } from 'native-base'

class TestRoute extends Component {

  constructor(){
    super()
    this.navigate = this.navigate.bind(this)
  }

  //обработчик навигатора
  navigate(ident){
    this.props.navigator.push({
      ident
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home Page!
        </Text>
        <Button
            onPress= {() => this.navigate('secondPage') }
            title="Go to  Page"
            accessibilityLabel="See an informative alert"

          />

          <Button
              onPress= {() => this.navigate('secondPage') }
              title="Go to second Page"
              accessibilityLabel="See an informative alert"

            />

            <Button
                onPress= {() => this.navigate('secondPage') }
                title="Go to third Page"
                accessibilityLabel="See an informative alert"

              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default TestRoute
