import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core';

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #61dafb;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }

  & b.${props => props.classes.counter} {
    color: black;
  }

  & span {
    color: black;
  }
`


// ============================================================================

const Header = props => {
  const classes = makeStyles(styles)();
  const { selected, clearCart } = props

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="primary" noWrap className={classes.toolbarTitle}>
            <StyledLink classes={classes} to="/">
              <b >React</b>  Products Store
            </StyledLink>
          </Typography>
          <Button disabled={selected.length === 0} variant="outlined" className={classes.cart} >
            <StyledLink classes={classes} to="/products/cart">
              <b className={classes.counter}>{selected.length}</b>
              <span className={classes.text}>products in the cart</span>
            </StyledLink>
          </Button>
          <Button
            disabled={selected.length === 0}
            variant="outlined"
            className={classes.cart}
            onClick={() => clearCart()}
          >
            <b className={classes.counter}>X</b>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
