import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useStateValue} from '../StateStore/StateProvider'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  
function AlbumDetails() {
    const classes = useStyles();
    const params = useParams()
    const [{records}, dispatch] = useStateValue()
    const [detailAlbum, setDetailAlbum] = useState([])

    console.log("FROM ALBUM DETAIL", records)

    useEffect(() =>{
        if(params){
            console.log("FROM ALBUM DETAIL", params)

            records.forEach(record => {
                if(record.id === params.id) setDetailAlbum(record)  
 
            })
            console.log("STATE", detailAlbum)
            console.log("params", params.id)
        }
    },[params, detailAlbum, records])

    console.log("record", records[params.id].album_title)

    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", item
        })
    }
   return(
    <div className={classes.root}>
       <Grid container>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <img src={records[params.id -1].album_cover} alt={records[params.id -1].album__title} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <h1>{records[params.id -1].album_title}</h1>
                    <h5>{records[params.id -1].artist}</h5>
                    <h5>{records[params.id -1].price}</h5>
                    <p>From one of the foremeost artists of our time comes a musical masterpiece. With lush production, and poignant vocals.</p>
                    <Grid container>
                    <Grid item xs={6}>
                    <p className={classes.paper}>{records[params.id -1].label}</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p className={classes.paper}>serial number {records[params.id -1].serial_no}</p>
                  </Grid>
                  </Grid> 
                
          <Button variant="contained" color="secondary"
          onClick={() => addToCart(records[params.id -1])}
        >
  ADD TO CART
</Button>
                </Paper>
            </Grid>
       </Grid>
    </div>
   )
}

export default AlbumDetails

// <p>{albumDetails.description}</p>
// <p>{albumDetails.content}</p>
// <p>Sold: {albumDetails.sold}</p>



// import React from 'react'

// const AlbumDetails = () => {

//     return(
//         <>
//         <img src="https://place-hold.it/400x400/black" alt="album-cover"/>
//         <h2>Album Title</h2>
//         <h3>Artist Name</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum mauris diam, quis sagittis erat sodales a. Nullam eget purus sed diam sodales pretium ut ut quam. Integer placerat tortor in mollis bibendum. Nunc non ipsum pellentesque, molestie mauris ac, maximus nibh. Nullam at tempor odio, ut consectetur neque. Ut facilisis ligula ante. Aenean pulvinar augue pharetra, fringilla risus volutpat, ornare nisl. Maecenas sagittis, augue in congue tincidunt, sapien massa commodo neque, eget blandit magna magna auctor dui. Praesent lacus ligula, faucibus non gravida ac, hendrerit non arcu. </p>
//         <p>$20</p>
//         <button>ADD TO CART</button>
//         <hr/>
//         <p>Track List</p>
//         <ul>
//             <li>The Godfather</li>
//             <li>The Shawshank Redemption</li>
//             <li>Schindler's List</li>
//             <li>Raging Bull</li>
//             <li>Casablanca</li>
//             <li>One Flew Over the Cuckoo's Nest</li>
//             <li>Gone with the Wind</li>
//             <li>Citizen Kane</li>
//             <li>The Wizard of Oz</li>
//             <li>Titanic</li>
//         </ul>
//         </>
//     )
// }
// export default AlbumDetails


// const params = useParams()
// const state = useContext(GlobalState)
// const [products] = state.productsAPI.products
// const addCart = state.userAPI.addCart
// const [albumDetails, setAlbumDetails] = useState([])
// const [{records}, dispatch] = useStateValue()

// useEffect(() =>{
//     if(params.id){

//         records.forEach(record => {
//             if(record._id === params.id) setDetailProduct(record)
//         })
//     }
// },[params.id, records])

// if(albumDetails.length === 0) return null;

// return (
//     <>
//         <div className="detail">
//             <img src={albumDetails.album_cover} alt="" />
//             <div className="box-detail">
//                 <div className="row">
//                     <h2>{albumDetails.album_title}</h2>
//                     <h6>#id: {albumDetails.id}</h6>
//                 </div>
//                 <span>$ {albumDetails.price}</span>
               
//                 <Link to="/cart" className="cart"
//                 onClick={() => addCart(albumDetails)}>
//                     Buy Now
//                 </Link>
//             </div>
//         </div>

//         <div>
//             <h2>Related products</h2>
//             <div className="products">
//                 {
//                     records.map(record => {
//                         return record.category === albumDetails.category 
//                             ? <ProductItem key={record._id} product={record} /> : null
//                     })
//                 }
//             </div>
//         </div>
//     </>