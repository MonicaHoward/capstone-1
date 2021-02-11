
const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            console.log("adding product", action.item)

            const updatedCart = [...state.cart];
            const updatedItemIndex = updatedCart.findIndex(
                (item) => item.id === action.item)
                updatedCart.push({ ...action.item});
            
                console.log("check is what is",{ ...state, cart: updatedCart })

                return (
                    {...state, cart: updatedCart }
                     );
       
        case "CHECK_OUT":
            const x = [...state.cart, action.payload]
            return{
                ...state,
                cart: x
            }
        default: 
        return state;
    }
}

export default reducer