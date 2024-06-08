import React ,{useState,useEffect} from 'react'
import LinkWithIcon from '../Navbar/LinkWithIcons'
import apiClient from "../../Utils/Util"
import "./ProductsSidebar.css"
import useData from '../Hooks/useData'
const ProductsSidebar = () => {
  // console.log(data)
   const {data: categories , error}= useData("/category");
  
  // const [categories, setCategories] = useState([])
  // const [error, setError] = useState("")

  // useEffect(()=>{
  //   apiClient.get("/category")
  //   .then(res=> setCategories(res.data))
  //   .catch((err)=>setError(err.message))
  // },[])

  return (
    <aside className='products_sidebar'>
        <h2>Category</h2>
        <div className="category_links">
          {error && <em className='form_error'>{error}</em>}
          { categories && categories.map((category)=>(
              <LinkWithIcon
               key ={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
             />
          ))}
        </div>
    </aside>
  )
}

export default ProductsSidebar





  // const [categories, setCategories] = useState([])
  // const [error, setError] = useState("")

  // useEffect(()=>{
  //   apiClient.get("/category")
  //   .then(res=> setCategories(res.data))
  //   .catch((err)=>setError(err.message))
  // },[])