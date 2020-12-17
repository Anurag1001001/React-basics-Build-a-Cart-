import React from 'react';

export default class CartItem extends React.Component{
    increaseQuantity = () => {
        // state will get change by this way also but react will not reflect it to client side, so chnage the state use setState() 
        // this.state.Qty += 1
        

        
        // setState method-1
        this.setState({
            Qty: this.state.Qty + 1
        });


        // setState method-2
        //  Instead of passing object over there we'll pass callback function 
        // Use this method when prevState is required
        // this.setState((prevState) =>{
        //     // Calling setState() simply means that rerendering the page if state changes
        //     return {
        //         Qty: this.state.Qty + 1
        //     }
        // });        
    }

    // decrease Quantity
    decreaseQuantity = () => {
        // Object destructuring 
        const {Qty} = this.state
        if (Qty > 0){
            console.log('this', this.state);
            // setState method-1
            this.setState({
                Qty: this.state.Qty - 1
            });
        }
    }

    render(){
        // Every instance of cart Item will have a property called props and inside that props we'll get the data which we're passing attribute in cart.js(parent component)
        console.log('this.props', this.props);
        // object destructuring
        // product as  a object send hua h(as a props ) so ese likha h this.props.product 
        const {price, title, Qty} = this.props.product
        return(
            
            <div className ="cart-item">
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style = {{fontSize:25}}>{title}</div>
                    <div style = {{color:'#777'}}>Rs {price}</div>
                    <div style = {{color: '#777'}}>Qty: {Qty}</div>
                    <div className="cart-item-actions">
                        {/* {Button } */}
                        <img
                         alt="increase"
                         className="action-icons" 
                         src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                         onClick = {() => this.props.onIncreaseQuantity(this.props.product)}
                         />
                        <img
                         alt="decrease"
                         className="action-icons" 
                         src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg"
                         onClick = {this.decreaseQuantity}
                          />
                        <img
                         alt="delete" 
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                         />
                    </div>
                </div>
            </div>
        );
    }
} 

const styles = {
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background: '#777'
    }
}