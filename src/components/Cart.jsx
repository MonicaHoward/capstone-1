import React, {useEffect, useContext, useReducer, useState} from 'react' 
import Album from '../components/Album'
import CartItem from '../components/CartItem'
import {useStateValue } from '../StateStore/StateProvider'

// import RecordsContext from '../StateStore/context'
// import recordsReducer from '../StateStore/reducer'

const Cart = () => {
    const [{cart}] = useStateValue()
  
        console.log("FROM CART", cart)
        
   

    return(
        // <div>
        // <h1>THIS IS THE CART</h1>
        
        // </div>

        <div>
            {cart.map(cartAlbum => (
        <h1 key={cartAlbum.id}>
            {cartAlbum.album_title}
        </h1>
        ))}
            <h4>All Cart Items </h4>
            <p>Number of Items in Cart:</p>
            <hr />
            <button>checkout</button>
        </div>
    )
            }

export default Cart