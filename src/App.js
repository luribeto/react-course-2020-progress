import React, { Component } from 'react';

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Header from './components/Header';
import FilterableProductTable from './components/FilterableProductTable.js';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="App">
          <FilterableProductTable />
        </div>
      </Provider>
    );
  }
}

export default App
