import React, { Component } from 'react';
import { fetchProducts } from './services/products'

import FilterableProductTable from './components/FilterableProductTable.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productsRes: {
        products: [],
        errMess: null,
        isLoading: true,
      }
    }
  }

  componentDidMount() {
    setTimeout(this.fetchProducts, 3000)
  }

  fetchProducts = async () => {
    const response = await fetchProducts()
    this.setState({
      productsRes: {
        products: response,
        errMess: null,
        isLoading: false
      }
    })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable {...this.state.productsRes} />
      </div>
    );
  }
}

export default App;
