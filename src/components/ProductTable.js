import React, { useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductsCategoryRow from './ProductsCategoryRow'
import ProductRow from './ProductRow'
import { Context } from "../context/Store";

const ProductsTable = props => {
  const context = useContext(Context)
  const { isLoading, products } = context.globalState
  // Reduce to group product by category
  const groupByCategory = products => products.reduce((accumulator, product) => ({
    ...accumulator,
    [product.category]: [
      ...(accumulator[product.category] || []),
      product
    ]
  }), {})
  // Conditional function to exclude filtered product
  const shouldFilterProduct = (product, filters) => {
    const { name, stocked } = product
    const { filterText, isStockOnly } = filters

    if (name.toLowerCase().indexOf(filterText.toLowerCase()) < 0) return true
    if (isStockOnly && !stocked) return true
    return false
  }
  // Add each filtered ProductRow
  const addProductsToTable = (categoryProducts, rows) => {
    categoryProducts.forEach((product, index) => {
      if (shouldFilterProduct(product, props)) return
      rows.push(<ProductRow key={`${index}_${product.name}`} product={product} />)
    })
  }
  // Add each ProductCategoryRow
  const addCategoryName = (category, rows) => {
    rows.push(<ProductsCategoryRow key={category} name={category} />)
  }

  const renderProductsRows = () => {
    const rows = []
    const groupedProducts = groupByCategory(products)
    const categories = Object.keys(groupedProducts)
    categories.forEach(category => {
      addCategoryName(category, rows)
      addProductsToTable(groupedProducts[category], rows)
    })
    return rows
  }
  // Conditional rendering for progress icon
  if (isLoading) return (<CircularProgress />)
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
        {renderProductsRows()}
      </TableBody>
    </Table>
  )
}

export default ProductsTable
