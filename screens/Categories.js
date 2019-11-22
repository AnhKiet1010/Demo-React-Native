import React, { Component } from 'react';
import { StyleSheet, Text, View ,FlatList } from 'react-native';
import CategoryList from '../components/CategoryList';
import shower from '../assets/shower.png';
import tooth from '../assets/toothpaste.png';
import cleanser from '../assets/face-cleanser.png';
import cream from '../assets/cream.png';
import axios from 'axios';

export default class Categories extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
    super(props);

    this.state = {
        categories : []
    }
}
    componentDidMount() {
        axios.get('http://305f1ee1.ngrok.io/categories')
        .then(
            res => this.setState({
                categories: res.data
            })
        )
        .catch(err => console.log(err))
    }

    render() {
        const { categories } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                data={categories}
                renderItem={({item}) => <CategoryList
                    category={item}
                    onPress={() => this.props.navigation.navigate('Category', {
                        categoryName: item.title,
                        categoryId: item.id
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
