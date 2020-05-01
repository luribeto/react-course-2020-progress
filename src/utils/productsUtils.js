export const groupByCategory = products => products.reduce((accumulator, product) => ({
  ...accumulator,
  [product.category]: [
    ...(accumulator[product.category] || []),
    product
  ]
}), {})

export const shouldExcludeProduct = (product, filters) => {
  const { name, stocked } = product
  const { filterText, isStockOnly } = filters

  if (name.toLowerCase().indexOf(filterText.toLowerCase()) < 0) return true
  if (isStockOnly && !stocked) return true
  return false
}

export const isInCart = (selected, productId) => {
  const finded = !!selected.find(id => id === productId)
  return !!finded
}

export const getSelectedProducts = (selected, products) => {
  const selectedProds = products.filter(product => selected.includes(product.id))
  return selectedProds
}

export const getTotal = selectedProducts => {
  const total = selectedProducts.reduce((acc, product) => {
    const priceParts = product.price.split('$')
    const price = parseFloat(priceParts[1])
    acc += price
    return acc
  }, 0)

  return parseFloat(total).toFixed(2)
}

