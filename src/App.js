import React from 'react';

import Header from './components/Header'
import FilterableProductTable from './components/FilterableProductTable';
import { Store } from './context/Store'
import './App.css'

const App = () => (
  <Store>
    <Header />
    <div className="App">
      <FilterableProductTable />
    </div>
  </Store>
)

export default App;
