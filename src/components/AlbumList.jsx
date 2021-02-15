import React from 'react' 
import Album from '../components/Album'
import {useStateValue} from '../StateStore/StateProvider'
import './Album.css'
// import RecordsContext from '../StateStore/context'
// import recordsReducer from '../StateStore/reducer'

const AlbumList = () => {
    const [{records, cart}] = useStateValue()
    console.log("FROM ALBUM LIST", records, cart)
    return(
        <div className="album-list">
            {records.map(record => (
                <Album
                record={record}
                albumTitle={record.album_title}
                />
            ))}
        </div>
    )
}

export default AlbumList