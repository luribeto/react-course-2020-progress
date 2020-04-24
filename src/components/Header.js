import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

import { clearCart } from '../redux/actionCreators'

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#18161B'
  },
  toolbarTitle: {
    flex: 1,
    color: '#61DBFB !important'
  },
  cart: {
    backgroundColor: '#fefefe !important',
    marginLeft: 15,
  },
  counter: {
    fontSize: 20
  },
  text: {
    marginLeft: 15
  }
}

const Header = () => {
  const selectedProducts = useSelector(state => state.productsList.selectedProducts);
  const dispatch = useDispatch();
  const classes = makeStyles(styles)();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="primary" noWrap className={classes.toolbarTitle}>
            <b >React</b>  Products Store
          </Typography>
          <Button disabled={selectedProducts.length === 0} variant="outlined" className={classes.cart} >
            <b className={classes.counter}>{selectedProducts.length}</b> <span className={classes.text}>products in the cart</span>
          </Button>
          <Button disabled={selectedProducts.length === 0} variant="outlined" className={classes.cart} onClick={() => dispatch(clearCart())}>
            <b className={classes.counter}>X</b>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Header