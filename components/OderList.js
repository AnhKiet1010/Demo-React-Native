import React from 'react';
import  { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import cream from '../assets/cream.png';
import { FontAwesome } from '@expo/vector-icons';

export default class OrderList extends React.Component {


    render() {
        const { item, onAddToCartClick, removeFromCart } = this.props; 
        return <View style={styles.container}>
            <Image source={cream} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.productName}>Sữa Rửa Mặt</Text>
                <Text style={styles.price}>5000K</Text>
            </View>
            <View style={styles.quantity}>
                <TouchableOpacity onPress={removeFromCart}>
                    <FontAwesome name='plus-circle' style={styles.button} />
                </TouchableOpacity>
                <Text style={styles.number}>2</Text>
                <TouchableOpacity onPress={onAddToCartClick}>
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
        flex: 3
    },
    productName: {
        fontSize: 24,
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
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 5
    },
    button: {
        fontSize: 32,
        paddingVertical: 5,
        color: '#3c3c3c'
    }
})