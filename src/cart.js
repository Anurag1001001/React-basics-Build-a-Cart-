import React from 'react';
import CartItem from './CartItem';

// Basically props are useful to share data among parent and children
// Functional component me render() nhi hota hai
const Cart = (props) =>{
    // we can pass any data from Cart to CartItem via props
    const {products} = props;
    return(
        <div className="cart">
            {/* passing props to CartItem */}
            {/* <CartItem Qty={1} price={99} title={'Watch'} img={''} /> */}
            {products.map((product) =>{
                // key is not a props 'key' is predefine keyword  and we passes key for React internal purpose
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                )
            })}

        </div>
    );
} 

export default Cart;