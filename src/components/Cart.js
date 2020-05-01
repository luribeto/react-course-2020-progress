import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { getSelectedProducts, getTotal } from '../utils/productsUtils'

const Cart = props => {
  const { selected, productsState } = props
  const selectedProducts = getSelectedProducts(selected, productsState.products)

  const renderSelectedProduct = product => {
    const checkout = getTotal(selectedProducts)
    return (
      <div>
        {selectedProducts.map(product => (
          <div key={`${product.id}_cart`}>{`${product.name} - ${product.price}`}</div>
        ))}
        <div><b>Total: ${checkout}</b></div>
      </div>

    )
  }

  const renderEmpty = () => (
    <div>Your cart is Empty</div>
  )

  return (
    <div className="App-container">
      <Card style={{ maxWidth: '350px' }}>
        <CardHeader title="PRODUCT CART" subheader="">
        </CardHeader>
        <img src={`https://fakeimg.pl/350x200/?text=SelectedProducts&font=lobster`} alt="Selected Products" />
        <CardContent>
          <div>Cart:</div>
          {selectedProducts.length === 0 ? renderEmpty() : renderSelectedProduct()
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default Cart
