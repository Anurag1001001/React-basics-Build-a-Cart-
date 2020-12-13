import React from 'react';

export default class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title: 'Phone',
            Qty:1,
            img: ''
        }
    }
    render(){
        // object destructuring
        const {price, title, Qty} = this.state
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
                        <img alt="increase" className="action-icons" src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/2740/2740679.svg" />
                        <img alt="delete" className="action-icons" src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
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