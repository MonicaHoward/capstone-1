import React from 'react' 
import './shop.css'
import AlbumList from '../components/AlbumList'
import { Grid } from '@material-ui/core'

const Shop = () => {
    return(
        <Grid 
            container
            className="shop"
            direction="row"
            justify="center"
            alignItems="center"
        >
            <h1 className="shop-title">SHOP</h1>
            <Grid
                item
            >
            <AlbumList/>
            </Grid>
        </Grid>       
    )
}
export default Shop

