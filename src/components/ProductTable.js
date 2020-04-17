import React from 'react'
import PropTypes from 'prop-types'

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

const shouldBeExcluded = (product, filters) => {
  const { name, stocked } = product
  const { filterText, isStockOnly } = filters

  if (name.indexOf(filterText) < 0) return true
  if (isStockOnly && !stocked) return true
  return false
}

const addCategoryName = (category, rows) => {
  rows.push(<ProductsCategoryRow key={category} name={category} />)
}

const addProductsToTable = (products, props, rows) => {
  products.forEach((product, index) => {
    if (shouldBeExcluded(product, props)) return
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
  if (props.isLoading) return (<p>Loading products...</p>)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {renderProductsRows(props)}
        </tbody>
      </table>
    </div>
  )
}

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  errMess: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  isStockOnly: PropTypes.bool.isRequired
}

export default ProductsTable
