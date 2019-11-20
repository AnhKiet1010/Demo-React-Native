import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryList from './components/CategoryList';
import logo1 from './assets/hearts.png';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryList title='TieKie Forever' image={logo1} />
      <CategoryList title='TieKie Forever' image={logo1} />
      <CategoryList title='TieKie Forever' image={logo1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
