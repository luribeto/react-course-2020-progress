import React from 'react'
import { Link } from 'react-router-dom'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'

import TruncatedCompound from '../shared/TruncateCompound'
import { isInCart } from '../utils/productsUtils'
import './ProductRow.css'

const ColorSpan = styled.span`
  color: ${props => !props.stocked ? "#aa00ff" : "inherit"};
  font-style: ${props => !props.stocked ? "italic" : "normal"};
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #222f5b;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const ProductRow = props => {
  const {
    product,
    selected,
    selectProduct,
    unselectProduct,
  } = props
  const { id, name, price, stocked, description } = product
  const handleProductSelect = (e) => {
    if (e.target.checked) return selectProduct(id)
    return unselectProduct(id)
  }

  return (
    <TableRow key={`${name}-${id}`}>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <Checkbox
          color="primary"
          checked={isInCart(selected, id)}
          disabled={!stocked}
          onChange={handleProductSelect}
        />
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <StyledLink to={`/products/${id}`}>
          <ColorSpan stocked={stocked}><strong>{name}</strong></ColorSpan>
        </StyledLink>
        <TruncatedCompound>
          <div>{description}</div>
        </TruncatedCompound>
      </TableCell>
      <TableCell className="row-padding" component="td" scope="row" padding="none">
        <ColorSpan stocked={stocked}>{price}</ColorSpan>
      </TableCell>
    </TableRow>
  )
}

export default ProductRow
