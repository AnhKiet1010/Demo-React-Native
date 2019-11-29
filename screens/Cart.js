import React, { Component } from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import OrderList from '../components/OderList';
import Bill from '../components/Bill';
import CartContext from '../contexts/CartContext';

export default class Cart extends Component {

    static navigationOptions = {
        title: 'Cart'
    }

    render() {
        return <View style={styles.container} >
            <CartContext.Consumer>
                {({cartItems, addToCart, removeFromCart}) =>
                    <FlatList 
                        data={cartItems}
                        renderItem={({item}) =>
                            <OrderList item={item} addToCart={ addToCart } removeFromCart={removeFromCart} />
                        }
                        keyExtractor={(item) => `${Math.random()}`}
                    />
                }
            </CartContext.Consumer>

            <CartContext.Consumer>
                {({total}) => <Bill total={total} style={styles.bill} />}
            </CartContext.Consumer>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    bill: {
        
    }
})