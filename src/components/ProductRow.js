import React from 'react'

const ProductRow = props => {
  return (
    <tr className="product-row">
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
    </tr>
  )
}

export default ProductRow
