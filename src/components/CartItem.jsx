import React, {useContext} from 'react'
import RecordsContext from '../StateStore/context'


const CartItem = ({product}) => {
    const {state} = useContext(RecordsContext)
    console.log("CartItem state", state.cart)


    return(
        <div>
            <h1>Title: {product}</h1>
        </div>
    )
}

export default CartItem