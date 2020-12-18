import React from 'react';
import Cart from './cart';
// import CartItem from './CartItem';
import Navbar from './Navbar';

export default class App extends React.Component{
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

  handleDecreaseQuantity = (product) =>{
      console.log('please decrease the quantity of the product');
      const {products} = this.state;
      const index = products.indexOf(product);
      if (products[index].Qty === 0){
          return
      }
      products[index].Qty -= 1
      this.setState({
          products: products
      })
  }

  handleDeleteProduct = (id) =>{
      const {products} = this.state;
      //  this will create an array that contains elements whose id is not equal to mentioned id
      const items = products.filter((item) =>  item.id !==  id);
      this.setState({
          products: items
      })

  }
  getCartCount = () =>{
      const {products} = this.state;
      let count = 0;
    //   we can use map() instead of forEach() function
      products.forEach((product) =>{
          count += product.Qty
      });
      return count;
      
  }

  render(){
    //  destructuring 
    const { products } = this.state;
    // {console.log(product)}
    return (
      <div className="App">
        <Navbar count = {this.getCartCount} />
        <Cart 
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
        />
                
      </div>
    );
  }
}


