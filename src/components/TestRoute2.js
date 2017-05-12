
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { Container, Content } from 'native-base'

class TestRoute2 extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello second Page
        </Text>
        <Button
          onPress= {() => this.props.navigator.pop() }
            title="Back"
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

export default TestRoute2
