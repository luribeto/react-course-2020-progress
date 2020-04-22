import React from 'react'

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import styles from './ProductCategoryRow.module.css'

const ProductsCategoryRow = props => {
  console.log(styles['row-padding'])
  return (
    <TableRow key={props.name}>
      <TableCell className={styles['row-padding']} colSpan={2} component="td" scope="row">
        {props.name}
      </TableCell>
    </TableRow>
  )
}

export default ProductsCategoryRow
