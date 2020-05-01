import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import ProductsCategoryRow from './ProductsCategoryRow'
import ProductRow from './ProductRow'

const ProductsTable = props => {
  const {
    productsState,
    filteredProducts,
    selected,
    selectProduct,
    unselectProduct
  } = props

  const renderRows = () => filteredProducts.map((row, index) => {
    const {
      product,
      category,
      type,
    } = row

    if (type === 'category') return <ProductsCategoryRow key={`${index}_${category}`} name={category} />
    return <ProductRow key={`${index}_${product.name}`} {...{ product, selected, selectProduct, unselectProduct }} />
  })

  if (productsState.isLoading) return (<CircularProgress />)
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
        {renderRows()}
      </TableBody>
    </Table>
  )
}

export default ProductsTable
