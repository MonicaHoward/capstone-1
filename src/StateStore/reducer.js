export const initialState = {
    records: [
        // {
        //     id: x,
        //     artist: x,
        //     album_title: x,
        //     album_cover: x,        
        //     genre: x,
        //     price: 19.99,
        //     label: RCA,
        //     serial_no: 111111111,
        //     quantity: 1
        // },
        {
            id: 1,
            artist: "Diana Ross",
            album_title: "diana",
            album_cover: "/diana-diana-ross.webp",        
            genre: "r&b",
            price: 18.99,
            label: "RCA",
            serial_no: 842111111,
            quantity: 1
        },
        {
            id: 2,
            artist: "Maxwell",
            album_title: "BLACKsummer's Night",
            album_cover: "/blacksummersnight-maxwell.jpg",        
            genre: "r&b",
            price: 20.99,
            label: "RCA",
            serial_no: 908411111,
            quantity: 2
        },
        {
            id: 3,
            artist: "Kendrick Lamar",
            album_title: "DAMN",
            album_cover: "/damn-delux-kendrick-lamar.jpg",        
            genre: "rap",
            price: 24.99,
            label: "RCA",
            serial_no: 73891111,
            quantity: 4
        },
        {
            id: 4,
            artist: "Amy Winehouse",
            album_title: "Back to Black",
            album_cover: "back-to-black-amy-winehouse.jpg",        
            genre: "r&b",
            price: 18.98,
            label: "RCA",
            serial_no: 1742111,
            quantity: 44
        },
        {
            id: 5,
            artist: "Santana",
            album_title: "Santana",
            album_cover: "santana-santana.jpg",        
            genre: "rock",
            price: 12.99,
            label: "RCA",
            serial_no: 407532111,
            quantity: 34
        },
        {
            id: 6,
            artist: "Adele",
            album_title: "21",
            album_cover: "21-adele.webp",        
            genre: "pop",
            price: 19.99,
            label: "RCA",
            serial_no: 469876536,
            quantity: 7
        },
        {
            id: 7,
            artist: "Taylor Swift",
            album_title: "Folklore",
            album_cover: "/folklore-taylor-swift.png",        
            genre: "country",
            price: 19.99,
            label: "RCA",
            serial_no: 97654432,
            quantity: 12
        },
        {
            id: 8,
            artist: "Taylor Swift",
            album_title: "Reputation",
            album_cover: "/reputation-taylor-swift.png",        
            genre: "country",
            price: 19.99,
            label: "RCA",
            serial_no: 876544322,
            quantity: 9
        },
        {
            id: 9,
            artist: "Drake",
            album_title: "Scorpion",
            album_cover: "/scorpion-drake.jpg",        
            genre: "rap",
            price: 19.99,
            label: "RCA",
            serial_no: 99765411,
            quantity: 4
        },
        {
            id: 10,
            artist: "The Roots",
            album_title: "Undone",
            album_cover: "/undone-the-roots.jpg",        
            genre: "rap",
            price: 19.99,
            label: "RCA",
            serial_no: 1876544332,
            quantity: 3
        },
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
        case "REMOVE_FROM_CART":
            let newCart = [...state.cart];

            const index = state.cart.findIndex((item) =>  item.id === action.id)
            if (index >= 0) {
                newCart.splice((index, 1), )
            }
            console.log("FROM REDUCER", index,)

            return {
                ...state,
                cart: newCart
            }
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

