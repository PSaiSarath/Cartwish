import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../components/Home/HomePage'
import LoginPage from '../../components/Authentication/LoginPage'
import SignupPage from '../../components/Authentication/SignupPage'
import CartPage from '../../components/Cart/CartPage'
import MyOrderPage from '../../components/MyOrder/MyOrderPage'
import ProductsPage from '../../components/Products/ProductsPage'
import SingleProductPage from '../../components/SingleProduct/SingleProductPage'
const Routing = () => {
  return (
    <Routes>
        < Route path = "/" element ={<HomePage/>} />
        <Route path = "/login" element={<LoginPage/> } />
        <Route path = "/signup" element={<SignupPage/> } />
        <Route path = "/cart" element={<CartPage/> } />
        <Route path = "/myorders" element={<MyOrderPage/> } />
        <Route path = "/products" element={<ProductsPage/> } />
        <Route path = "/singleproduct/1" element={<SingleProductPage/> } />

    </Routes>
  )
}

export default Routing