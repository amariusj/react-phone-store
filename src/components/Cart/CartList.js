import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {

    const { cart } = props;

    return (
        <div className="container-fluid">
            { cart.map(item => {
                return (
                    <CartItem 
                        key={item.id}
                        item={item}
                        props={props}
                    />
                );
            }) }
        </div>
    );
};

export default CartList;