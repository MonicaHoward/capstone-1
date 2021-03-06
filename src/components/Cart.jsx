import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {useStateValue} from '../StateStore/StateProvider'
import StripeCheckout from 'react-stripe-checkout'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Album' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Album Title' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Artist' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Price' },
];

function Cart(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage] = React.useState(5);
  const [qty, setQty] = React.useState([{qty: 1}]);
  const [{cart}, dispatch] = useStateValue()


  const handleQtyChange = (event) => {
    setQty(event.target.value)
    console.log("QTY",qty)
  };

  const removeCartItem = () => {
      dispatch({
      type: "REMOVE_FROM_CART",
    })
  }

  const total = cart.reduce((acc, curr) => acc + curr.price, 0)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function handleToken(token, addresses){
    console.log({token, addresses})   
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, cart.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
    {cart?.length === 0 ? (
      <div><h1>NOTHING IN CART</h1></div>
    ) : ( 
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <Cart
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={cart.length}
            />
            <TableBody>
              {stableSort(cart, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}                     
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                        
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        <img className="thumbnail" src={row.album_cover}  alt={`${row.album_title} album cover`} />
                      </TableCell>
                      <TableCell key={row.id} align="right">{row.album_title}</TableCell>
                      <TableCell key={row.id} align="right">{row.artist}</TableCell>
                      <TableCell key={row.id} align="right">{row.price}</TableCell> 
                      <TableCell key={row.id} align="right">

                        <FormControl variant="outlined" className={classes.formControl}>
                          <InputLabel key={row.id}  id="demo-simple-select-outlined-label">qty.</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              defaultValue="1"
                              type="number"
                              value={qty.qty}
                              onChange={handleQtyChange}
                              label="qty"
                            >
                            { [...Array(row.quantity)].map((e, i) => (
                                <MenuItem 
                                  key={i}                                
                                  defaultValue ={1}
                                  value={i+1}
                                >
                                  {i+1}
                                </MenuItem>)) }                       
                            </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell key={row.id} align="right">
                        <IconButton aria-label="delete" onClick={removeCartItem}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell> 
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <h1>TOTAL: {total.toFixed(2)}</h1>
        <StripeCheckout
                  stripeKey="pk_test_51HIGdtFRb0GUvFhrlJAw2BIbRA9lGLgeoyEl4UZoEwkRp6b5Wdq90TraSfv0Qa8PTKmxnSMjhnGBx0xR3TElsGqa00ffMFSf9n"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={total * 100}
        />
      </Paper>    
      )}
    </div>
  );
}
