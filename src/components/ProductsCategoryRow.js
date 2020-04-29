import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import styles from './ProductCategoryRow.module.css'

const ProductsCategoryRow = props => (
  <TableRow key={props.name}>
    <TableCell className={styles['row-padding']} colSpan={3} component="td" scope="row">
      {props.name}
    </TableCell>
  </TableRow>
)

export default ProductsCategoryRow
