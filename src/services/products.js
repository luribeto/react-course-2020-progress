import { baseUrl } from '../config/baseUrl'

export const fetchProducts = () => {
  return fetch(baseUrl + 'products')
    .then(response => {
      return response;
    })
    .then(response => response.json())
    .catch(error => {
      return { error: true, message: error.message };
    })
}

