import React from 'react';
import  { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class OrderList extends React.Component {


    render() {
        const { item, addToCart, removeFromCart } = this.props;
        const formatPrice = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(item.product.price);
        return <View style={styles.container}>
            <Image source={{uri: item.product.image}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.productName}>{item.product.name}</Text>
                <Text style={styles.price}>{formatPrice}</Text>
            </View>
            <View style={styles.quantity}>
                <TouchableOpacity  onPress={() => addToCart(item.product) }>
                    <FontAwesome name='plus-circle' style={styles.button} />
                </TouchableOpacity>
                <Text style={styles.number}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.product)}>
                    <FontAwesome name='minus-circle' style={styles.button}/>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#fff',
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginTop: 8,
        marginBottom: 8,
        flexDirection: 'row',
        marginHorizontal: 10
    },
    image: {
        width: 64,
        height: 64
    },
    info: {
        flex: 3,
        marginLeft: 2
    },
    productName: {
        fontSize: 20,
        padding: 5
    },
    price: {
        paddingHorizontal: 5,
        color: '#393939'
    },
    quantity: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    number: {
        fontSize: 22,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 2
    },
    button: {
        fontSize: 24,
        paddingVertical: 5,
        color: '#3c3c3c'
    }
})