import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

export default function CategroyList(props) {
    const { category,onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{category.title}</Text>
                <Image source={category.image} style={styles.categoryImage} />
            </View>
        </TouchableOpacity>
    );
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