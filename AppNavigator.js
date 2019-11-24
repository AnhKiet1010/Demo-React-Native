import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Order from './screens/Order';
import Setting from './screens/Setting';

const CategoryStack = createStackNavigator({
    Categories,
    Category
    });
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: (({  tintColor }) => (
        <FontAwesome name="home" size={32} color={tintColor} />
    ))
}
const CartStack = createStackNavigator({Cart});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: (({ tintColor }) => (
        <FontAwesome name="shopping-cart" size={32} color={tintColor} />
    ))
}
const OrderStack = createStackNavigator({Order});
OrderStack.navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: (({ tintColor }) => (
        <FontAwesome name="th-list" size={32} color={tintColor} />
    ))
}
const SettingStack = createStackNavigator({Setting});
SettingStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: (({ focused, horizontal, tintColor }) => (
        <FontAwesome name="gear" size={32} color={tintColor} />
    ))
}

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
})

export default AppNavigator;