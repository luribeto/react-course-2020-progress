import React, { Component } from 'react'
import styled from 'styled-components'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import '../App.css'

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

const StyledActions = styled(CardActions)`
  padding: 20px 30px;
`

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
    const { classes } = this.props;

    return (
      <div className="App-container">
        <Card className={classes.card}>
          <CardHeader title="PRODUCT SEARCH APP" subheader="React Course 2020">
          </CardHeader>
          <CardContent>
            <SearchBar
              filterText={filterText}
              filterValueChanged={this.filterValueChanged}
              isStockOnly={isStockOnly}
              stockOnlyValueChanged={this.stockOnlyValueChanged}
            />
            <br />
            <ProductTable {...this.getProductTableProps()} />
          </CardContent>
          <StyledActions>
            <Button size="small" color="primary">Add New Product</Button>
          </StyledActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(FilterableProductTable);
