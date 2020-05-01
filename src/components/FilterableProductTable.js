import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

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

const FilterableProductTable = props => {
  const classes = makeStyles(styles)();
  const {
    productsState,
    filteredProducts,
    filterText,
    isStockOnly,
    selected,
    filterValueChanged,
    stockOnlyValueChanged,
    selectProduct,
    unselectProduct
  } = props

  return (
    <div className="App-container">
      <Card className={classes.card}>
        <CardHeader title="PRODUCT SEARCH APP" subheader="React Course 2020">
        </CardHeader>
        <CardContent>
          <SearchBar {...{ filterText, isStockOnly, filterValueChanged, stockOnlyValueChanged }} />
          <br />
          <ProductTable {...{ productsState, filteredProducts, selected, selectProduct, unselectProduct }} />
        </CardContent>
        <StyledActions>
          <Button size="small" color="primary">Add New Product</Button>
        </StyledActions>
      </Card>
    </div>
  )
}

export default FilterableProductTable
