import React from 'react' 
import Album from '../components/Album'
import {useStateValue} from '../StateStore/StateProvider'
import { Grid } from '@material-ui/core'
import './Album.css'

const AlbumList = () => {
  
    const [{records, cart}] = useStateValue()
    console.log("FROM ALBUM LIST", records, cart)
    return(
        <Grid 
            container
            item  
            spacing={6}
        >
            {records.map((record, i) => (
                <Grid 
                    item
                    lg={4}
                    sm={6}
                    xs={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Album
                    key={record.id}
                    record={record}
                    albumTitle={record.album_title}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default AlbumList