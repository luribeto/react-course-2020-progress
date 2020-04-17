import React from 'react'

const ProductsCategoryRow = props => {
  return (
    <tr className="product-category">
      <td colSpan={2}><strong>{props.name}</strong></td>
    </tr>
  )
}

export default ProductsCategoryRow
