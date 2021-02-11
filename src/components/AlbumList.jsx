import React, {useContext, useReducer, useState} from 'react' 
import Album from '../components/Album'
import RecordsContext from '../StateStore/context'
// import recordsReducer from '../StateStore/reducer'

const AlbumList = () => {
    const { state, dispatch } = useContext(RecordsContext)

    return(
        <div>
            {state.records.map(record => (
                <Album 
                    key={record.id}
                    record={record}
                    albumTitle={record.album_title}
                    albumCover={record.album_cover}
                />
            ))}
        </div>
    )
}

export default AlbumList