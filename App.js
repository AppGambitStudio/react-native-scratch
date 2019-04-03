/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigators/root';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
