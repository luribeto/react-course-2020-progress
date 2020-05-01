import React, { useState, useEffect } from 'react'

import App from './App'
import { fetchProducts } from './services/products'
import { groupByCategory, shouldExcludeProduct } from './utils/productsUtils'
import './App.css'

const AppContainer = () => {
  const [productsState, setProducts] = useState({ isLoading: true, products: [] })
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isStockOnly, setStocked] = useState(false)
  const [filterText, setFilterText] = useState('')
  const [selected, setSelected] = useState([])

  const filterValueChanged = (e) => setFilterText(e.target.value)
  const stockOnlyValueChanged = () => setStocked(!isStockOnly)
  const selectProduct = (productId) => {
    const newSelected = [...selected]
    newSelected.push(productId)
    setSelected(newSelected)
  }
  const unselectProduct = (productId) => setSelected([...selected.filter(id => id !== productId)])
  const clearCart = () => setSelected([])

  useEffect(() => {
    (async () => {
      const response = await fetchProducts()
      setProducts({ isLoading: false, products: response })
    })()
  }, [])

  useEffect(() => {
    if (productsState.products.length > 0) {
      const rows = []

      const addCategoryName = (category, rows) => {
        rows.push({ type: 'category', category })
      }

      const addProductsToTable = (categoryProducts, rows) => {
        categoryProducts.forEach((product, index) => {
          if (shouldExcludeProduct(product, { filterText, isStockOnly })) return
          rows.push({ product })
        })
      }

      const groupedProducts = groupByCategory(productsState.products)
      const categories = Object.keys(groupedProducts)
      categories.forEach(category => {
        addCategoryName(category, rows)
        addProductsToTable(groupedProducts[category], rows)
      })

      setFilteredProducts(rows)
    }
  }, [productsState, filterText, isStockOnly])

  const appProps = {
    productsState,
    filteredProducts,
    isStockOnly,
    filterText,
    selected,
    filterValueChanged,
    stockOnlyValueChanged,
    selectProduct,
    unselectProduct,
    setProducts,
    clearCart,
  }

  return (
    <App {...appProps} />
  )
}

export default AppContainer;
