import React, {useEffect, useContext, useReducer, useState} from 'react' 
import Album from '../components/Album'
import CartItem from '../components/CartItem'


import RecordsContext from '../StateStore/context'
import recordsReducer from '../StateStore/reducer'

const Cart = ({records}) => {
    const initialState = useContext(RecordsContext)
    const [state, dispatch] = useReducer(recordsReducer, initialState)

  
        console.log("Anything in the cart?", state.cart)
        console.log(initialState)
   
    if(state.cart === undefined) {
        // console.log(state.cart )
        return "no items in cart"
    }    
    else {

    return(
        <div>
        <h1>THIS IS THE CART</h1>
           <ul>
            {state.cart.map(item => (
                <CartItem 
                    product={item}
                />
            ))}
           </ul>
           <hr/>
        </div>

        // <div>
        //     {state.cart.map(cartAlbum => (
        // <h1 key={cartAlbum.id}>
        //     {cartAlbum.album_title}
        // </h1>
        // ))}
        //     <h4>All Cart Items </h4>
        //     <p>Number of Items in Cart:</p>
        //     <hr />
        //     <button>checkout</button>
        // </div>
    )
            }
}

export default Cart