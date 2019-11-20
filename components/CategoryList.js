import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import logo from '../assets/hearts.png';

export default function CategroyList(props) {
    const { category } = props;
    return <View style={styles.container}>
            <Text style={styles.text}>{category.title}</Text>
            <Image source={category.image} style={styles.categoryImage} />
        </View>
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
        marginBottom: 16
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 8
    }
})