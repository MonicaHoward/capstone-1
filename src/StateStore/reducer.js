export const initialState = {
    records: [
        // {
        //     id: x,
        //     artist: x,
        //     album_title: x,
        //     album_cover: x,        
        //     genre: x
        // },
        {
            id: 1,
            artist: "Diana Ross",
            album_title: "diana",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "r&b",
            price: 18.99
        },
        {
            id: 2,
            artist: "Maxwell",
            album_title: "BLACKsummer's Night",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "r&b",
            price: 20.99
        },
        {
            id: 3,
            artist: "Kendrick Lamar",
            album_title: "DAMN",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "rap",
            price: 24.99
        },
        {
            id: 4,
            artist: "Amy Winehouse",
            album_title: "Back to Black",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "r&b",
            price: 18.98
        },
        {
            id: 5,
            artist: "Santana",
            album_title: "Santana",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "rock",
            price: 12.99
        }
    ],
    cart: [],
}

function reducer(state, action){
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        break;
        case "REMOVE_FROM_CART":
            return {state}
        break;

        default: 
            return state
    }
}


// const reducer = (state, action) => {
//     switch(action.type){
//         case "ADD_TO_CART":
//             console.log("adding product", state)

//             const updatedCart = [...state.cart];
//             const updatedItemIndex = updatedCart.findIndex(
//                 (item) => item.id === action.item)
//                 updatedCart.push({ ...action.item});
            
//                 console.log("check is what is", state.cart)

//                 return (
//                     {...state, cart: updatedCart }
//                      );
//              break;       
//         case "CHECK_OUT":
//             const x = [...state.cart, action.payload]
//             return{
//                 ...state,
//                 cart: x
//             }
//         default: 
//         return state;
//     }
// }

export default reducer

