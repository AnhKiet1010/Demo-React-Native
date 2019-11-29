import React, {Component} from 'react';
import { Alert } from 'react-native';

const CartContext = React.createContext();
export default CartContext;

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            constNum: 1,
            cartItems: [{
                id: 1,
                product: 
                    { 
                        "id": 1,
                        "name" : "SỮA RỬA MẶT",
                        "image": "https://blogchamsoc.com/wp-content/uploads/2018/11/cerave-2-loai.jpg",
                        "price": 500000,
                        "category": 2
                    },
                quantity: 1
            }],
            total: 0
        }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.getTotal = this.getTotal.bind(this);
    }

    addToCart(product) {
        console.log('adding to cart', product);
        Alert.alert(
            'Mua Hàng',
            'Bạn có muốn mua sản phẩm này',
            [
                { 
                    text: 'Ok',
                    onPress: () => {
                        const { cartItems } = this.state;
                        for(var item of cartItems) {
                            if(item.product.id == product.id) {
                                const index = cartItems.indexOf(item);
                                this.setState({
                                    cartItems: [
                                        ...cartItems.slice(0, index),
                                        { ...item, quantity:  cartItems[index].quantity + 1},
                                        ...cartItems.slice(index + 1)
                                    ]
                                });
                            } else {
                                this.setState({
                                    constNum: this.state.constNum + 1,
                                    cartItems: cartItems.concat({
                                        id: this.state.constNum + 1,
                                        product: product,
                                        quantity: 1
                                    })
                                });
                            }
                        }
                        this.getTotal();
                        Alert.alert(
                            'Đã thêm vào giỏ hàng'
                        );
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed')
                }
            ],
            { cancelable: false }
        );
        this.getTotal();
    }

    removeFromCart(product) {
        console.log('remove from cart', product);
        Alert.alert(
            'Xóa khỏi giỏ hàng',
            'Bạn có muốn xóa sản phẩm này',
            [
                { 
                    text: 'Ok',
                    onPress: () => {
                        const { cartItems } = this.state;
                        for(var item of cartItems) {
                            if(item.product.id == product.id) {
                                const index = cartItems.indexOf(item);
                                const quantity = cartItems[index].quantity;
                                quantity !== 1 ?
                                    this.setState({
                                        cartItems: [
                                            ...cartItems.slice(0, index),
                                            { ...item, quantity:  cartItems[index].quantity - 1},
                                            ...cartItems.slice(index + 1)
                                        ]
                                    }) : this.setState({
                                        cartItems: [
                                            ...cartItems.slice(0, index),
                                            ...cartItems.slice(index + 1)
                                        ]
                                    })
                            }
                        }
                        this.getTotal();
                        Alert.alert(
                            'Đã xóa khỏi giỏ hàng'
                        );
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed')
                }
            ],
            { cancelable: false }
        );
    }

    getTotal() {
        var total = 0;
        const { cartItems } = this.state;
        for(var item of cartItems) {
            total += item.product.price * item.quantity
        }

        this.setState({
            total: total
        });
    }

    componentDidMount() {
        var total = 0;
        const { cartItems } = this.state;
        for(var item of cartItems) {
            total += item.product.price * item.quantity
        }
        console.log('componentDidMount : ' + total);
        this.setState({
            total: total
        });
    }

    componentDidUpdate() {
        console.log(this.state.cartItems);
    }

    render() {
        return (
            <CartContext.Provider value={{
                cartItems: this.state.cartItems,
                addToCart: this.addToCart,
                removeFromCart: this.removeFromCart,
                total: this.state.total
            }}>
                { this.props.children }
            </CartContext.Provider>
        );
    }
}