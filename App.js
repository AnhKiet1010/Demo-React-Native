import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator';
import 'react-native-gesture-handler';
import * as Font from 'expo-font';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {

  componentDidMount() {
    Font.loadAsync({
      'OdibeeSans-Regular': require('./assets/fonts/OdibeeSans-Regular.ttf'),
      'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
      'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    });
  }

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
