import React, { useContext } from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'

import { Context } from "../context/Store";
import { selectProduct, unSelectProduct } from '../context/actionCreators'
import './ProductRow.css'

const ColorSpan = styled.span`
  color: ${props => !props.stocked ? "#aa00ff" : "inherit"};
  font-style: ${props => !props.stocked ? "italic" : "normal"};
`

const ProductRow = props => {
  const { id, name, price, stocked } = props.product
  const { globalState, dispatch } = useContext(Context)
  const { selectedProducts } = globalState
  const isInCart = !!selectedProducts.find(productId => id === productId)
  const handleProductSelect = (e) => {
    if (e.target.checked) return dispatch(selectProduct(id))
    return dispatch(unSelectProduct(id))
  }

  return (
    <TableRow key={name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          color="primary"
          checked={isInCart}
          disabled={!stocked}
          onChange={handleProductSelect}
        />
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={stocked}>{name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={stocked}>{price}</ColorSpan>
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
