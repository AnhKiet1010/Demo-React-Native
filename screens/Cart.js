import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import OrderList from '../components/OderList';
import Bill from '../components/Bill';

export default class Cart extends Component {

    static navigationOptions = {
        title: 'Cart'
    }

    render() {
        return <View style={styles.container} >
            <OrderList />
            <Bill style={styles.bill} />
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