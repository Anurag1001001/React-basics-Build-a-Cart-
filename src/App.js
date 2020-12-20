import React from 'react';
import Cart from './cart';
// import CartItem from './CartItem';
import Navbar from './Navbar';
import firebase from 'firebase';

export default class App extends React.Component{
    constructor(){
      // Since we're inheriting Component from React and in javascript if we're inheriting something then we should call parent constructor first in app constructor 
      super();
      this.state = {
          products: [],
          loading : true
      }
      this.db = firebase.firestore();
      // Just google it give a read over bind()
      //  this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  //  componentDidMount

  componentDidMount () {
    //   firebase
    //     .firestore()
    //     .collection('products')
    //     .get()
    //     .then((snapshot) => {
    //         // console.log(snapshot);

    //         // snapshot.docs.map((doc) => {
    //         //     console.log(doc.data())
    //         // });

    //         const products = snapshot.docs.map((doc) => {
    //             const data = doc.data();

    //             data['id'] = doc.id;
    //             return data;
    //         });
    //         this.setState({
    //             products: products,
    //             loading: false
    //         })
    //     })

    //  I did a small change and used onSnapshot() instead of get() and inside onSnapshot used callback function
    //  what basically onSnapshot() does is if something change happens to the data in the firebase database then onsSnapshot() fired and inside this we're calling setState() function that's why updation gets reflected to the UI without manually refreshing the page

    //  get() method basically fetch the data once
    this.db
        .collection('products')
        // .where('price', '==', 900)
        // .where('title', '==', 'Mobile')
        .orderBy('price', 'asc')
        .onSnapshot((snapshot) => {
            // console.log(snapshot);

            // snapshot.docs.map((doc) => {
            //     console.log(doc.data())
            // });

            const products = snapshot.docs.map((doc) => {
                const data = doc.data();

                data['id'] = doc.id;
                return data;
            });
            this.setState({
                products: products,
                loading: false
            })
        })
  }





  // IncreaseQuantity function
  handleIncreaseQuantity = (product) =>{
      console.log('hey please increase the quantity  of ', product);
      const {products} = this.state;
      const index = products.indexOf(product);
    //   products[index].Qty += 1;
    //   this.setState({
    //       products
    //   })
    
    //  increase reflect to the firebase database
    
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
        Qty: products[index].Qty + 1 
    })
    .then(() =>{
        console.log('updated successfully');
    })
    .catch((error) =>{
        console.log('error', error);
    })

  }

  handleDecreaseQuantity = (product) =>{
      console.log('please decrease the quantity of the product');
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].Qty === 0){
          return
      }
    
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef.update({          
          Qty: products[index].Qty - 1
      })
      .then(() =>{
          console.log('Updated Successfully');
      })
      .catch((error) =>{
          console.log('error', error);
      })



      if (products[index].Qty === 0){
          return
      }
    //   products[index].Qty -= 1
    //   this.setState({
    //       products: products
    //   })
  }

  handleDeleteProduct = (id) =>{
      const {products} = this.state;
      //  this will create an array that contains elements whose id is not equal to mentioned id
    //   const items = products.filter((item) =>  item.id !==  id);
    //   this.setState({
    //       products: items
    //   })
    const docRef = this.db.collection('products').doc(id);
    docRef
        .delete()
        .then(() =>{
            console.log('Deleted Successfully');
        })
        .catch((error) =>{
            console.log('error', error);
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

  getCartTotal = () => {
    const {products} = this.state;
    let total = 0;
  //   we can use map() instead of forEach() function
    products.forEach((product) =>{
        total += product.price* product.Qty
    });
    return total;
  }

  addProduct = () => {
      this.db
        .collection('products')
        .add({
            img: '',
            price: 900,
            Qty:3,
            title: 'Washing Machine'
        })
        // docRef refer to the collection(consist of product details basically this is the document that we're going to add to the collection of products into the firebase) that are inside {} in add() method and that product infact document are going to store inside collection of firebase db.
        //  a litle update here add(), after adding a document to the database it return a promise and we'll handle with then, and docRef refers to the document that has been added.

        .then((docRef) => {
            console.log('Product has been added', docRef);
        })
        .catch((error) => {
            console.log('Error :', error);
        })
  }

  render(){
    //  destructuring 
    const { products, loading } = this.state;
    // {console.log(product)}
    return (
      <div className="App">
        <Navbar count = {this.getCartCount} />
        {/* <button onClick = {this.addProduct}>Add Product</button> */}
        <Cart 
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products....</h1>}
        <div style ={{padding:10, fontsize:20}}> Total : {this.getCartTotal()}</div>
                
      </div>
    );
  }
}


