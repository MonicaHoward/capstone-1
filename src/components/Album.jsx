import React from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
  const [{records, cart}, dispatch] = useStateValue()

    
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
      <CardMedia
        className={classes.media}
        styles={useStyles.card}
        image={record.album_cover}
      />
       
      <CardHeader
        
  
        title={albumTitle}
        subheader={record.artist}
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
    </Card>
  );
}
