import React ,{useState,useEffect} from 'react'
import apiClient from "../../Utils/Util"
const useData = (endpoint , customConfig , deps) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("");
    const [isLoading,setIsLoading] = useState(false)
  
    useEffect(() => {
     setIsLoading(true)
      apiClient.get(endpoint, customConfig )
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      
      })
      .catch(err =>{setError(err.message)
        setIsLoading(false)
      })
      
     
    },deps ? deps : []);
    return { data, error , isLoading } ;
}

export default useData