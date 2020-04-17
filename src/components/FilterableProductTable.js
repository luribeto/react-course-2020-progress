import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import '../App.css'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterText: '',
      isStockOnly: false
    }
  }

  filterValueChanged = filterText => {
    this.setState({ filterText })
  }

  stockOnlyValueChanged = () => {
    this.setState({ isStockOnly: !this.state.isStockOnly })
  }

  getProductTableProps = () => {
    return {
      filterText: this.state.filterText,
      isStockOnly: this.state.isStockOnly,
      products: this.props.products,
      isLoading: this.state.isLoading,
      isLoading: this.props.isLoading,
    }
  }

  render() {
    const { filterText, isStockOnly } = this.state;

    return (
      <div className="App-container">
        <div>
          <h4>PRODUCT SEARCH APP</h4>
        </div>
        <SearchBar
          filterText={filterText}
          filterValueChanged={this.filterValueChanged}
          isStockOnly={isStockOnly}
          stockOnlyValueChanged={this.stockOnlyValueChanged}
        />
        <br />
        <ProductTable {...this.getProductTableProps()} />
      </div>
    )
  }
}

export default FilterableProductTable
