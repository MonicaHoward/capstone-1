import React from 'react' 
import {useStateValue} from '../StateStore/StateProvider'
import './shop.css'
import AlbumList from '../components/AlbumList'
import { Grid } from '@material-ui/core'

const Shop = () => {
    const [{cart}] = useStateValue()
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

