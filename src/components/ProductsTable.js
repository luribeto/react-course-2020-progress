import React from 'react'
import { useSelector } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductsCategoryRow from './ProductsCategoryRow'
import ProductRow from './ProductRow'

const renderProductRow = product => <ProductRow key={`${product.id}_${product.name}`} product={product} />
const renderProductCategoryRow = category => <ProductsCategoryRow key={category} name={category} />


const ProductsTable = props => {
  const { products, isLoading } = useSelector(state => state.productsList);
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
      rows.push(renderProductRow(product))
    })
  }
  // Add each ProductCategoryRow
  const addCategoryName = (category, rows) => {
    rows.push(renderProductCategoryRow(category))
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
  if (products.length === 0) return (<p>There is not product to show</p>)
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
