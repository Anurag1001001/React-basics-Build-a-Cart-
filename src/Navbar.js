import React from 'react';

// 'props' by default pass by the React to the functional component
const Navbar = (props) => {
  // // const {count} = props.getCartCount();
  // console.log(props.count());
    return(
        <div style ={styles.nav}>
            <div style ={styles.cartIconContainer}>
                <img style ={styles.cartIcon} src = 'https://image.flaticon.com/icons/svg/2121/2121815.svg' alt='cart-icon'/>
                <span style ={styles.cartCount}>{props.count()}</span>
            </div>                
        </div>
    )   
} 

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
};

export default Navbar;