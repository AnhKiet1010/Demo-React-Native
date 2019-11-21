import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import 'react-native-gesture-handler';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
          <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
