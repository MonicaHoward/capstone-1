import React from 'react' 
import {useStateValue} from '../StateStore/StateProvider'
import AlbumList from '../components/AlbumList'


const Shop = () => {
    const [{cart}] = useStateValue()
    console.log("SHOP PAGE", cart)
    return(
        
        <div>
            <h1>SHOP</h1>
            <AlbumList />
        </div>
        
)
}

export default Shop
// import './shop.css'
// import Header from '../components/Header'
// import AlbumList from '../components/AlbumList'
// import Cart from '../components/Cart'
// import Navbar from '../components/Navbar'

// // import {RecordsContext} from '../StateStore/context'
// // import recordsReducer from '../StateStore/reducer'




    // const initialState = useContext(RecordsContext)
    // const [state, dispatch] = useReducer(recordsReducer, initialState)

    // console.log("SHOP STATE", state.state)
    // console.log("SHOP context", RecordsContext)



// export default Shop

// <Header />
