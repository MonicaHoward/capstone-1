import React, {useState, useContext} from 'react' 
import RecordsContext from '../StateStore/context'
import recordsReducer from '../StateStore/reducer'

const Album = ({record, albumTitle, albumCover}) => {
    const [currentRecord, setCurrentRecord] = useState([])
    const {
            state: { cart = {} },
            dispatch
        } = useContext(RecordsContext)
    

    const addToCart = (item) => {
        console.log(item)
        dispatch({ type: "ADD_TO_CART", item})
        
    }

    return(
        <main>
            // <img src={albumCover}alt="album-cover"/>
            <h2>Album Title: {albumTitle}</h2>
            <h3>Artist Name</h3>
            <p>$20</p>
            <button 
                onClick={() => addToCart(record)}
                // onSubmit={handleSubmit}
                value={currentRecord}
            >
                ADD TO CART
            </button>
            <p>l</p> 
        </main>
    )
}

export default Album