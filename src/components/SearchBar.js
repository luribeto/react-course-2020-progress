import React from 'react'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const filterValueChanged = (props) => (e) => props.filterValueChanged(e.target.value);
const stockOnlyValueChanged = (props) => () => props.stockOnlyValueChanged();

const SearchBar = props => {
  const { isStockOnly, filterText } = props

  return (
    <form>
      <TextField id="filled-basic" label="Search Product" variant="filled" value={filterText} type="text" onChange={filterValueChanged(props)} fullWidth />
      <br />
      <Checkbox
        color="primary"
        checked={isStockOnly}
        onChange={stockOnlyValueChanged(props)}
      />
      Only show products in stock
    </form>
  )
}

export default SearchBar
