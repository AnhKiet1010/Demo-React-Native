import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import shower from '../assets/shower.png';
import tooth from '../assets/toothpaste.png';
import cleanser from '../assets/face-cleanser.png';
import cream from '../assets/cream.png';

export default function CategroyList(props) {
    const { category,onPress } = props;
    let image = shower;
    if(category.id == '2') {
        image = cleanser;
    }
    if(category.id == '3') {
        image = cream;
    }
    if(category.id == '4') {
        image = tooth;
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{category.name}</Text>
                <Image source={image} style={styles.categoryImage} />
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
        fontSize: 16,
        fontWeight: '900',
        textTransform: 'uppercase',
        marginBottom: 8,
        fontFamily: 'Pacifico-Regular'
    }
})