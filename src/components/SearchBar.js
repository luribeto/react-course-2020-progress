import React from 'react'

const filterValueChanged = (props) => (e) => props.filterValueChanged(e.target.value);
const stockOnlyValueChanged = (props) => () => props.stockOnlyValueChanged();

const SearchBar = props => {
  const { isStockOnly, filterText } = props

  return (
    <div style={{ border: '2px solid orange' }}>
      <form>
        <input value={filterText} type="text" placeholder="Search Text" onChange={filterValueChanged(props)} />
        <br />
        <input value={isStockOnly} type="checkbox" onChange={stockOnlyValueChanged(props)} /> Only show products in stock
      </form>
    </div>
  )
}

export default SearchBar
