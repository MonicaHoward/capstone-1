import React, {useContext} from 'react'
import RecordsContext from '../StateStore/context'


const CartItem = ({product, album_title}) => {
    const {state} = useContext(RecordsContext)
    console.log("CartItem state", state.cart)
    console.log("CartItem state", product.album_title)



    return(
        <div>
            <h1>title from cart item: {product.album_title}</h1>
            <h1>{album_title}</h1>

        </div>
    )
}

export default CartItem