import React from 'react';
import CartItem from './CartItem';

// Basically props are useful to share data among parent and children

export default class Cart extends React.Component{
    constructor(){
        // Since we're inheriting Component from React and in javascript if we're inheriting something then we should call parent constructor first in app constructor 
        super();
        this.state = {
            products: [
                {
                    price:99,
                    title: 'Watch',
                    Qty:1,
                    img: '',
                    id:1
                },
                {
                    price:999,
                    title: 'Mobile Phone',
                    Qty:10,
                    img: '',
                    id:2
                },
                {
                    price:9999,
                    title: 'Laptop Phone',
                    Qty:1,
                    img: '',
                    id:3
                }
            ]
        }
        // Just google it give a read over bind()
        //  this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    // IncreaseQuantity function
    handleIncreaseQuantity = (product) =>{
        console.log('hey please increase the quantity  of ', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].Qty += 1;
        this.setState({
            products
        })
    }

    handleDeccreaseQuantity = (product) =>{
        console.log('please decrease the quantity of the product');
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].Qty > 0){
            products[index].Qty -= 1
        }
        this.setState({
            products: products
        })
    }

    // we can pass any data from Cart to CartItem via props
    render(){
        const {products} = this.state;
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
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDeccreaseQuantity = {this.handleDeccreaseQuantity}
                        />
                    )
                })}

            </div>
        );
    }
} 

