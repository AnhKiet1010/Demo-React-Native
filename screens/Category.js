import React, { Component } from 'react';
import { Text, View, FlatList,StyleSheet } from 'react-native';
import ProductsListItem from '../components/ProductsListItem';
import axios from 'axios';

export default class Category extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };
    constructor(props) {
        super();

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        axios.get('http://3b0e3042.ngrok.io/products?category=' + navigation.getParam('categoryId'))
        .then(
            res => this.setState({
                products: res.data
            })
        )
        .catch(err => console.log(err))
    }

    render() {
        return (
            <FlatList
                data={this.state.products}
                contentContainerStyle={styles.container}
                numColumns={2}
                renderItem={({item}) =>
                    <View style={styles.wrap}>
                        <ProductsListItem product={item} />
                    </View>
                    }
                keyExtractor={ item => `${item.id}` }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 8
    },  
    wrap: {
        width: '50%',
        paddingHorizontal: 8
    }
})
