import React from 'react'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const SearchBar = props => {
  const { isStockOnly, filterText, filterValueChanged, stockOnlyValueChanged } = props

  return (
    <form>
      <TextField
        label="Search Product"
        variant="filled"
        value={filterText}
        type="text"
        onChange={filterValueChanged}
        fullWidth
      />
      <br />
      <Checkbox
        color="primary"
        checked={isStockOnly}
        onChange={stockOnlyValueChanged}
      />
      Only show products in stock
    </form>
  )
}

export default SearchBar
