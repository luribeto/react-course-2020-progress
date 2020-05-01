import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchProducts } from '../services/products'

const ProductDetail = props => {
  const match = useRouteMatch()
  const { products, isLoading } = props.productsState
  const product = products.find((product) => `${product.id}` === match.params.id) || { name: '', price: 0, category: '', description: '' }

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        const response = await fetchProducts()
        props.setProducts({ isLoading: false, products: response })
      })()
    }
  }, [props, products])

  const renderProductData = () => {
    if (isLoading) return (<CircularProgress />)
    return (
      <>
        <div><b>Name:</b> {product.name}</div>
        <div><b>Price:</b> {product.price}</div>
        <div><b>Category:</b> {product.category}</div>
        <div><b>Description:</b> {product.description}</div>
      </>
    )
  }

  return (
    <div className="App-container">
      <Card style={{ maxWidth: '350px' }}>
        <CardHeader title="PRODUCT DETAIL" subheader={product.name}>
        </CardHeader>
        <img src={`https://fakeimg.pl/350x200/?text=${product.name}&font=lobster`} alt={product.name} />
        <CardContent>
          <div>ID: {match.params.id}</div>
          {renderProductData()}
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductDetail
