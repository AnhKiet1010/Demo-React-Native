import React from 'react';
import  { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default class Bill extends React.Component {
    render() {
        const { total } = this.props;
        const formatPrice = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(total);

        return (
            <View style={styles.container}>
                <View style={styles.total}>
                    <Text style={styles.text}>Tổng</Text>
                    <Text style={styles.num}>{formatPrice}</Text>
                </View>
                <View style={borderRadius=7}>
                    <TouchableOpacity>
                        <Text style={styles.textButton}>Đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100
    },
    total: {
        padding: 10
    },
    text: {
        fontSize: 17,
        color: '#3c3c3c'
    },
    num: {
        fontSize: 24,
        fontWeight: '400'
    },
    button: {
        borderRadius: 5
    },
    textButton: {
        backgroundColor: '#007aac',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginHorizontal: 10,
        color: '#fff',
        borderRadius: 5
    }
})