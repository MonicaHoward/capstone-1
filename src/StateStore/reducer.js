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
            genre: "r&b"
        },
        {
            id: 2,
            artist: "Maxwell",
            album_title: "BLACKsummer's Night",
            album_cover: "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",        
            genre: "r&b"
        },
        {
            id: 3,
            artist: "Kendrick Lamar",
            album_title: "DAMN",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/ke/kendricklamar_damncollectorseditio_aiug.jpg",        
            genre: "rap"
        },
        {
            id: 4,
            artist: "Amy Winehouse",
            album_title: "Back to Build",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/am/amywinehouse_backtoblackdeluxeedi_7hcc.jpg",        
            genre: "r&b"
        },
        {
            id: 5,
            artist: "Santana",
            album_title: "Santana",
            album_cover: "https://www.albumartexchange.com/coverart/gallery/sa/santana_santana1stalbum_5xv6.jpg",        
            genre: "rock"
        }
    ],
    cart: ["bread", "milk", "eggs"],
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

