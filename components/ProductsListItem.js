import React from 'react';
import { View,Text,Image,StyleSheet } from 'react-native';

export default function ProductsListItem(props) {
    const { product } = props;
    const formatPrice = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(product.price);
    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image source={{uri: product.image}} style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{formatPrice}</Text>
                        <Text style={styles.cardText}>Mua +</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0}
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    image: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    },
    cardText: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#2f95dc'
    }
});