import React, { Component } from 'react';
import { Text, View, FlatList,StyleSheet } from 'react-native';
import ProductsListItem from '../components/ProductsListItem';
import productImage from '../assets/package.png';

export default class Category extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };

    constructor(props) {
        super();

        this.state = {
            products: [
                { 
                    id: 1,
                    name : 'CÂN BẰNG ĐỘ',
                    image: 'https://blogchamsoc.com/wp-content/uploads/2018/11/cerave-2-loai.jpg',
                    price: 500000
                },
                { 
                    id: 2,
                    name : 'NGĂN NGỪA NGUY',
                    image: 'https://blogchamsoc.com/wp-content/uploads/2018/08/S%E1%BB%AFa-R%E1%BB%ADa-M%E1%BA%B7t-Chi%E1%BA%BFt-Xu%E1%BA%A5t-Tr%C3%A0-Xanh-Innisfree.png',
                    price: 700000
                }
            ]
        };
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
        flex: 1,
        paddingHorizontal: 8
    }
})
