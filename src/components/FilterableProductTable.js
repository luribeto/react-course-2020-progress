import React, { useContext, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { productsFailed, addProducts } from '../context/actionCreators'
import { Context } from "../context/Store";
import { fetchProducts } from '../services/products'

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  }
};

const StyledActions = styled(CardActions)`
  padding: 20px 30px;
`

// ============================================================================

const FilterableProductTable = () => {
  // State of the component
  const [filterText, setFilterText] = useState('')
  const [isStockOnly, setStocked] = useState(false)
  // dispatcher for global state and memoized dispatch
  const { dispatch } = useContext(Context);
  // Injected classes from material-ui hook
  const classes = makeStyles(styles)();
  // Filter callbacks
  const filterValueChanged = (e) => setFilterText(e.target.value)
  const stockOnlyValueChanged = () => setStocked(!isStockOnly)
  // Fetch products function
  const getProducts = useCallback(async () => {
    const response = await fetchProducts()
    if (response.error) return dispatch(productsFailed(response.error))
    setTimeout(() => {
      dispatch(addProducts(response))
    }, 1000)
  }, [dispatch])
  // Fetch products once at mounting
  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className="App-container">
      <Card className={classes.card}>
        <CardHeader title="PRODUCT SEARCH APP" subheader="React Course 2020">
        </CardHeader>
        <CardContent>
          <SearchBar {...{ filterText, isStockOnly, filterValueChanged, stockOnlyValueChanged }} />
          <br />
          <ProductTable {...{ filterText, isStockOnly }} />
        </CardContent>
        <StyledActions>
          <Button size="small" color="primary">Add New Product</Button>
        </StyledActions>
      </Card>
    </div>
  )
}

export default FilterableProductTable
