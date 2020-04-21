import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components'

import './ProductRow.css'

const ProductRow = props => {
  const { product } = props

  const ColorSpan = styled.span`
    color: ${!product.stocked ? "#aa00ff" : "inherit"};
    font-style: ${!product.stocked ? "italic" : "normal"};
  `

  return (
    <TableRow key={product.name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.price}</ColorSpan>
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
