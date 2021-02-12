import React, {useContext, useReducer} from 'react' 
import './shop.css'
import AlbumList from '../components/AlbumList'
import Cart from '../components/Cart'

import RecordsContext from '../StateStore/context'
import recordsReducer from '../StateStore/reducer'


const Shop = () => {

    const initialState = useContext(RecordsContext)
    const [state, dispatch] = useReducer(recordsReducer, initialState)

    return(
        <RecordsContext.Provider value={{state,dispatch}}>
            <header
                className="shop" 
                style={{marginTop: "5%"}}
            >
                <h1>HELLOOOOOOOOOOO!</h1>
            </header>
            <div>
                    <Cart />
                    <AlbumList />
            </div>
            
        </RecordsContext.Provider>
    )
}

export default Shop