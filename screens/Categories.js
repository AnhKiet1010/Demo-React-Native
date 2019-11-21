import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import CategoryList from '../components/CategoryList';
import shower from '../assets/shower.png';
import tooth from '../assets/toothpaste.png';
import cleanser from '../assets/face-cleanser.png';
import cream from '../assets/cream.png';

export default class Categories extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
    super(props);

    this.state = {
        categories : [
            {id: 1, title: 'Sữa tắm',image: shower},
            {id: 2, title: 'Sữa Rửa Mặt',image: cleanser},
            {id: 3, title: 'Kem Dưỡng Da',image: cream},
            {id: 4, title: 'Kem Đánh Răng',image: tooth},
        ]
    }
}
    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View style={styles.container}>
                <FlatList 
                data={categories}
                renderItem={({item}) => <CategoryList 
                    category={item} 
                    onPress={() => this.props.navigation.navigate('Category', {
                        categoryName: item.title
                    })}
                />}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8
    },
});
