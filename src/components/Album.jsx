// import React, {useState, useContext} from 'react' 
// import RecordsContext from '../StateStore/context'
// import recordsReducer from '../StateStore/reducer'

// const Album = ({record, albumTitle, albumCover}) => {
//     const [currentRecord, setCurrentRecord] = useState([])
//     const {
//             state: { cart = {} },
//             dispatch
//         } = useContext(RecordsContext)
    

  
//     }

//     return(
//         <main>
//             // <img src={albumCover}alt="album-cover"/>
//             <h2>Album Title: {albumTitle}</h2>
//             <h3>Artist Name</h3>
//             <p>$20</p>
//             <button 
//                 onClick={() => addToCart(record)}
//                 // onSubmit={handleSubmit}
//                 value={currentRecord}
//             >
//                 ADD TO CART
//             </button>
//             <p>l</p> 
//         </main>
//     )
// }

// export default Album


import React, {useState, useContext} from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RecordsContext from '../StateStore/context'
import recordsReducer from '../StateStore/reducer'
import Button from '@material-ui/core/Button';
import {useStateValue} from '../StateStore/StateProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'orange',
    backgroundColor: 'green'
 },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
//   avatar: {
//     backgroundColor: red[500],
//   },
}));

export default function RecipeReviewCard({record, albumTitle, albumCover,}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [state, dispatch] = useStateValue()
  const [{records, cart}] = useStateValue()

    
console.log("FROM ALBUM records", records)
console.log("FROM ALBUM cart", cart)

    const addToCart = (item) => {
        console.log(item)
        dispatch({ type: "ADD_TO_CART", item
        })
        
    }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>  
    <IconButton 
    styles={useStyles.overlay}
    aria-label="add to favorites">
        <FavoriteIcon />
    </IconButton>   
      <CardMedia
        className={classes.media}
        styles={useStyles.card}
        image="https://images.pexels.com/photos/963436/pexels-photo-963436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
        <IconButton 
        styles={useStyles.overlay}
        aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
      <CardHeader
        
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={albumTitle}
        // subheader={}
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Button variant="contained" color="secondary"
        onClick={() => addToCart(record)}
                // onSubmit={handleSubmit}
                // value={currentRecord}
        >
  ADD TO CART
</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
