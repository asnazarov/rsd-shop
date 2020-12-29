import axios from 'axios';



/* Получить список товаров */
export const getAllData = (category: string | null) => {



  return axios.get(`https://fakestoreapi.com/products/${category !== null ? `category/${category}` : ''}`)
    .then(res => res.data)

}

export const getCurrentProduct = (id: number) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.data)
}

