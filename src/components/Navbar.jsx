import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import {useStateValue} from '../StateStore/StateProvider'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    background: 'hotpink'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [{records, cart}] = useStateValue()
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <Link to="/shop">
      <MenuItem>
        <IconButton aria-label="new items added to cart" color="inherit">
          <StorefrontIcon style={{color: "black"}}/>
        </IconButton>
        <p style={{color: "black"}}>Shop</p>
      </MenuItem>
    </Link>

    <Link to="/cart">
    <MenuItem>
      <IconButton aria-label="new items added to cart" color="inherit">
        <Badge badgeContent={cart.length} color="secondary">
            <ShoppingBasketIcon style={{color: "black"}}/>
        </Badge>
      </IconButton>
      <p style={{color: "black"}}>Cart</p>
    </MenuItem>
    </Link>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="sticky" style={{backgroundColor: "#000"}}>
        <Toolbar>
          <IconButton aria-label="new items added to cart" color="inherit">
            <Badge color="secondary">
              <Link to="/">
                <AlbumOutlinedIcon style={{color: "hotpink"}}/>
              </Link>
            </Badge>
          </IconButton>
          <Link to="/">
            <Typography className={classes.title} variant="h6" noWrap>
              PINKY'S RECORDS AND DISCS
            </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          
            <Autocomplete
    id="autocmplete-clickable"
    style={{ width: 300 }}
    options={records}
  
    autoHighlight
    getOptionLabel={(record) => record.album_title}
    renderOption={(record) => (
      <React.Fragment>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = `album/${record.id}`;
          }}
        >
          {record.album_title} 
        </span>
      </React.Fragment>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label="search"
        variant="outlined"
        inputProps={{
          ...params.inputProps,
          autoComplete: "new-password" // disable autocomplete and autofill
        }}
      />
    )}
  />
          </div>
          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Link to="/shop">
                <Typography className={classes.title} variant="h5" noWrap>
                  shop
                </Typography>
              </Link>
              <Link to="/cart">
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge classes={{badge: classes.badge}} badgeContent={cart.length} color="secondary">
                    <ShoppingBasketOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle style={{color: "black"}} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
