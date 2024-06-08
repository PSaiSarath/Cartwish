import React from 'react'
import ProductsSidebar from './ProductsSidebar'
import "./ProductsPage.css"
import ProductsList from './ProductsList'

const ProductsPage = () => {
  return (
    <section className='product_page'>
      <ProductsSidebar/>
   
    <ProductsList/>


    </section>
  )
}

export default ProductsPage