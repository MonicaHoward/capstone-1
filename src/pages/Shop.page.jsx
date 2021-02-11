import React, {useContext, useReducer} from 'react' 
import AlbumList from '../components/AlbumList'
import Cart from '../components/Cart'

import RecordsContext from '../StateStore/context'
import recordsReducer from '../StateStore/reducer'


const Shop = () => {

    const initialState = useContext(RecordsContext)
    const [state, dispatch] = useReducer(recordsReducer, initialState)

    return(
        <RecordsContext.Provider value={{state,dispatch}}>
            <Cart />
            <AlbumList />
        </RecordsContext.Provider>
    )
}

export default Shop