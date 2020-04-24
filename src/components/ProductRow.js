import React from 'react'
import { connect } from 'react-redux';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { selectProduct, unSelectProduct } from '../redux/actionCreators'

import './ProductRow.css'

const ProductRow = props => {
  const { product, selectedProducts, onSelect, onUnselect } = props
  const selected = selectedProducts.includes(product)

  const ColorSpan = styled.span`
    color: ${!product.stocked ? "#aa00ff" : "inherit"};
    font-style: ${!product.stocked ? "italic" : "normal"};
  `

  return (
    <TableRow key={product.name}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          checked={selected}
          color="primary"
          disabled={!product.stocked}
          onChange={() => selected ? onUnselect(product) : onSelect(product)}
        />
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.name}</ColorSpan>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan>{product.price}</ColorSpan>
      </TableCell>
    </TableRow>
  )
}

const mapDispatchToProps = { onSelect: selectProduct, onUnselect: unSelectProduct }
const mapStateToProps = state => ({
  selectedProducts: state.productsList.selectedProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductRow)
