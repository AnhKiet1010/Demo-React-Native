import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList } from 'react-native';
import CategoryList from './components/CategoryList';
import logo1 from './assets/hearts.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories : [
        {id: 1, title: 'Sữa tắm',image: logo1},
        {id: 2, title: 'Sữa Rửa Mặt',image: logo1},
        {id: 3, title: 'Kem Dưỡng Da',image: logo1},
        {id: 4, title: 'Kem Đánh Răng',image: logo1},
      ]
    }
  }
  render() {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>TIEKIE App</Text>
          <FlatList 
            data={categories}
            renderItem={({item}) => <CategoryList category={item} />}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
          />
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
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});
