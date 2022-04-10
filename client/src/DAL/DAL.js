import axios from 'axios';
console.log('DAL')
const getProductsData =(source)=>{
  // console.log('getProductsData DAL')
  // const products =  axios.get(`https://fakestoreapi.com/products/`,{
  const products =  axios.get(`/v3/products/`,{
    cancelToken: source.token,
  });
  return products;
}

const getProductDetailsData =(source, id)=>{
  console.log('getProductDetailsData DAL')
  // const productDetails =  axios.get(`https://fakestoreapi.com/products/${id}`,{
  const productDetails =  axios.get(`/v3/products/${id}`,{
    cancelToken: source.token,
  });
  return productDetails;
}


export {
  getProductsData,
  getProductDetailsData,
};