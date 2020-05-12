import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'

import { selectProduct, unSelectProduct } from '../redux/actionCreators'
import './ProductRow.css'

const ColorSpan = styled.span`
  color: ${props => !props.stocked ? "#aa00ff" : "inherit"};
  font-style: ${props => !props.stocked ? "italic" : "normal"};
`

const ProductRow = props => {
  const { product } = props
  const dispatch = useDispatch();
  const { selectedProducts } = useSelector(state => ({
    selectedProducts: state.productsList.selectedProducts
  }));

  const selected = selectedProducts.includes(product)

  return (
    <TableRow key={product.name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          checked={selected}
          color="primary"
          disabled={!product.stocked}
          onChange={() => selected ? dispatch(unSelectProduct(product)) : dispatch(selectProduct(product))}
        />
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={product.stocked}>{product.name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={product.stocked}>{product.price}</ColorSpan>
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
