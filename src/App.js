import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './components/Header'
import Cart from './components/Cart'
import FilterableProductTable from './components/FilterableProductTable';
import ProductDetail from './components/ProductDetail';
import './App.css'

const App = props => {
  const {
    productsState,
    filteredProducts,
    isStockOnly,
    filterText,
    selected,
    filterValueChanged,
    stockOnlyValueChanged,
    selectProduct,
    unselectProduct,
    setProducts,
    clearCart,
  } = props

  const cartProps = { productsState, selected }
  const headerProps = { selected, selectProduct, unselectProduct, clearCart }
  const productDetailProps = { productsState, setProducts }
  const filterableProductsProps = {
    productsState,
    filteredProducts,
    filterText,
    isStockOnly,
    selected,
    filterValueChanged,
    stockOnlyValueChanged,
    selectProduct,
    unselectProduct
  }

  return (
    <Router>
      <Header {...headerProps} />
      <div className="App">
        <Switch>
          <Route path="/products/cart">
            {productsState.products.length === 0 ? <Redirect to="/" /> : <Cart {...cartProps} />}
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductDetail {...productDetailProps} />
          </Route>
          <Route exact={true} path="/">
            <FilterableProductTable {...filterableProductsProps} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
