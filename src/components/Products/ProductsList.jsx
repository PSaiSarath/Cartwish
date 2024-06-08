import React, {useState, useEffect } from 'react'
import "./ProductsList.css"
import ProductCard from './ProductCard'
import useData from '../Hooks/useData'
import ProductCardSkelton from './ProductCardSkelton'
import { useSearchParams } from 'react-router-dom'


const ProductsList = () => {
  const [search,setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");
  const {data , error,isLoading} = useData("/products" ,{
    params : {
      category : category,
      page : page
      //category
      //this also fine bcoz both are same name 
    }


  },[category,page])

  const handlePageChange = page=>{
    console.log(search)
    setSearch({page : page})
  }
  const skeleton = [1,2,3,4,5,6,7,8]

  return (
    <section className='products_list_section'>
        <header className='align_center products_list_header'>
            <h2>Products</h2>
            <select name="sort" id=" " className='products_sorting'>
                <option value="">Relavance</option>
                <option value="price desc">Price HIGH to LOW</option>
                <option value="price asc">Price LOW to HIGH</option>
                <option value="rate desc">Rate HIGH to LOW</option>
                <option value="rate asc">Rate LOW to HIGH</option>
            </select>
        </header>
        <div className="products_list">
          {error && <em className='form_error'>{error}</em>}
          {isLoading && skeleton.map((item)=><ProductCardSkelton/>)}
          
           {data?.products &&
            data.products.map((product) =>(
            <ProductCard key ={product._id} 
            id ={product._id}
             image = {product.images[0]}
             price ={product.price} 
             title = {product.title}
             rating = {product.reviews.rate}  
             ratingCounts = {product.reviews.counts} 
             stock={product.stock} />
           ))}
           <button onClick={()=>handlePageChange(2)}>Page2</button>
        </div>
    </section>
  )
}

export default ProductsList


// const [products, setProducts] = useState([])
// const [error, setError] = useState("");

// useEffect(() => {
//   apiClient.get("/products")
//   .then(res => setProducts(res.data.products))
//   .catch(err =>setError(err.message))
 
// },[])