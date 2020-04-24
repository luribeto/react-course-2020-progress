import React from 'react'
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductsCategoryRow from './ProductsCategoryRow'
import ProductRow from './ProductRow'

const groupByCategory = products => products.reduce((result, product) => (
  {
    ...result,
    [product.category]: [
      ...(result[product.category] || []),
      product
    ]
  }
), {})

const shouldFilterProduct = (product, filters) => {
  const { name, stocked } = product
  const { filterText, isStockOnly } = filters

  if (name.toLowerCase().indexOf(filterText.toLowerCase()) < 0) return true
  if (isStockOnly && !stocked) return true
  return false
}

const addCategoryName = (category, rows) => {
  rows.push(<ProductsCategoryRow key={category} name={category} />)
}

const addProductsToTable = (products, props, rows) => {
  products.forEach((product, index) => {
    if (shouldFilterProduct(product, props)) return
    rows.push(<ProductRow key={`${index}_${product.name}`} product={product} />)
  })
}

const renderProductsRows = props => {
  const rows = []
  const groupedProducts = groupByCategory(props.products)
  const categories = Object.keys(groupedProducts)
  categories.forEach(category => {
    addCategoryName(category, rows)
    addProductsToTable(groupedProducts[category], props, rows)
  })
  return rows
}

const ProductsTable = props => {
  if (props.isLoading) return (<CircularProgress></CircularProgress>)
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderProductsRows(props)}
      </TableBody>
    </Table>
  )
}

const mapStateToProps = state => ({
  products: state.productsList.products,
  isLoading: state.productsList.isLoading,
})

export default connect(mapStateToProps)(ProductsTable)
