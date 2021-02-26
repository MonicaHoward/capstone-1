
import React from 'react' 
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {useStateValue} from '../StateStore/StateProvider'
import { Grid } from '@material-ui/core'

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
  // const [state, dispatch] = useStateValue()
  const [{records, cart}, dispatch] = useStateValue()
    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", item
        })
    }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
    <Card 
      item
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="center"
    >  
      <CardMedia
        className={classes.media}
        styles={useStyles.card}
        image={record.album_cover}
      />
      <Link to={`album/${record.id}`} style={{color: "black"}}>
      <CardHeader
        title={albumTitle}
        subheader={record.artist}
      />
      </Link>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color: "white"}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color: "white"}}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color: "white"}}/>
        </IconButton>
        <Button variant="contained" color="secondary"
        onClick={() => addToCart(record)}
        >
  ADD TO CART
</Button>
      </CardActions>
      </Card>
    </Grid>
  );
}
