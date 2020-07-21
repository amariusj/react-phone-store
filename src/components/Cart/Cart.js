import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { ProductConsumer } from '../../context';
import CartTotals from './CartTotals';

const Cart = () => {
    return (
        <section>
            <ProductConsumer>
                {({ cart, increment, decrement, removeItem, cartSubtotal, cartTax, cartTotal, clearCart }) => {
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="your" title="cart"></Title>
                                <CartColumns />
                                <CartList 
                                    cart={cart}
                                    increment={increment}
                                    decrement={decrement}
                                    removeItem={removeItem}
                                />
                                <CartTotals 
                                    cartSubtotal={cartSubtotal}
                                    cartTax={cartTax}
                                    cartTotal={cartTotal}
                                    clearCart={clearCart}
                                />
                            </React.Fragment>
                        )
                    } else {
                        return (
                            <EmptyCart />
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    );
};

export default Cart;