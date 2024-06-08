import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import {z} from "zod"
import "./LoginPage.css"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
  email : z.string().email({message : "Please enter valid email address"}).min(3),
  password : z.string().min(8,{message: "password should be atleast 8 characters"})
})

const LoginPage = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({resolver : zodResolver(schema)});
  console.log(errors);
  const onSubmit = (formData) => console.log(formData)
  

  return (
  <section className='align_center form_page'>
    <form action="" className="auntentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form_inputs">
            <div>
                <label htmlFor="email">Email</label>
                <input
                 type="email" 
                 id ="email"
                className="form_text_input"
                {...register("email")}
                 placeholder='Enter your email' 
                 />
              {errors.email && (
                <em className='form_error'>
                  {errors.email.message}
                </em>
              )}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id ="password"
                className="form_text_input"
                {...register("password")}
                 placeholder='Enter your password'
                />
                 {errors.password && (
                <em className='form_error'>
                  {errors.password.message}
                </em>
              )}
            </div>
           <button type='submit' className="search_button_ form_submit">Submit</button>
        </div>

    </form>
  </section>
  )
}

export default LoginPage






// import React, { useRef, useState } from 'react'
// import "./LoginPage.css"
// const LoginPage = () => {
//   const [user,setUser] = useState({
//     name : " ",
//     phone : " "
//   })



//   // const nameRef = useRef(null)
//   // const phoneRef=useRef(null)

//   const handleSubmit = (e)=>{
//     e.preventDefault();
    
//     // const user  = {
//     //   name : " ",
//     //   phone : " "
//     // }
//     // user.name=nameRef.current.value;
//     // user.phone = parseInt(phoneRef.current.value);
//      console.log(user);
    
//   }

//   return (
//   <section className='align_center form_page'>
//     <form action="" className="auntentication_form" onSubmit={handleSubmit}>
//         <h2>Loginn Form</h2>
//         <div className="form_inputs">
//             <div>
//                 <label htmlFor="">Name</label>
//                 <input
//                  type="text" 
//                  onChange={(e)=>{setUser({...user, name : e.target.value})}}
//                 //  ref={nameRef}
//                 className="form_text_input"
//                  placeholder='Enter your name' 
//                  value ={user.name} />
//             </div>
//             <div>
//                 <label htmlFor="">Phone Number</label>
//                 <input 
//                 type="number" 
//                 onChange={(e)=>{setUser({...user, phone : parseInt(e.target.value)})}}
//                 // ref={phoneRef}
//                 className="form_text_input"
//                  placeholder='Enter your number'
//                  value ={user.phone} />
                
                
//                 {/* <button type = "button" onClick={()=>(passwordRef.current.type="password")}>Hide Password</button>
//                 <button type = "button"  onClick={()=>(passwordRef.current.type="text")}> Show Password</button> */}
//             </div>
//            <button type='submit' className="search_button_ form_submit">Submit</button>
//         </div>

//     </form>
//   </section>
//   )
// }

// export default LoginPage











//for using react hook form

// import React, { useRef, useState } from 'react'
// import { useForm } from "react-hook-form"

// import "./LoginPage.css"


// const LoginPage = () => {
//   const {register, handleSubmit, formState:{errors}} = useForm();
//   console.log(errors);
//   const onSubmit = (formData) => console.log(formData)
  

//   return (
//   <section className='align_center form_page'>
//     <form action="" className="auntentication_form" onSubmit={handleSubmit(onSubmit)}>
//         <h2>Login Form</h2>
//         <div className="form_inputs">
//             <div>
//                 <label htmlFor="">Name</label>
//                 <input
//                  type="text" 
//                  {...register("name",{required:true,minLength:3})}
//                 className="form_text_input"
//                  placeholder='Enter your name' 
//                  />
//               {errors.name?.type === "required" && <em className='form_error'>Please enter your name</em>}
//               {errors.name?.type === "minLength" && <em className='form_error'>Name Should be 3 or more</em>}
//             </div>
//             <div>
//                 <label htmlFor="">Phone Number</label>
//                 <input 
//                 type="number" 
//                 {...register("phone",{valueAsNumber : true})}               
//                 className="form_text_input"
//                  placeholder='Enter your number'
//                 />
                
                
//             </div>
//            <button type='submit' className="search_button_ form_submit">Submit</button>
//         </div>

//     </form>
//   </section>
//   )
// }

// export default LoginPage



//form using useref``````````````````````````````````````````````````````````` 


// import React, { useRef, useState } from 'react'
// import "./LoginPage.css"
// const LoginPage = () => {
//   const [user,setUser] = useState({
//     name : " ",
//     phone : " "
//   })



//   // const nameRef = useRef(null)
//   // const phoneRef=useRef(null)

//   const handleSubmit = (e)=>{
//     e.preventDefault();
    
//     // const user  = {
//     //   name : " ",
//     //   phone : " "
//     // }
//     // user.name=nameRef.current.value;
//     // user.phone = parseInt(phoneRef.current.value);
//      console.log(user);
    
//   }

//   return (
//   <section className='align_center form_page'>
//     <form action="" className="auntentication_form" onSubmit={handleSubmit}>
//         <h2>Loginn Form</h2>
//         <div className="form_inputs">
//             <div>
//                 <label htmlFor="">Name</label>
//                 <input
//                  type="text" 
//                  onChange={(e)=>{setUser({...user, name : e.target.value})}}
//                 //  ref={nameRef}
//                 className="form_text_input"
//                  placeholder='Enter your name' 
//                  value ={user.name} />
//             </div>
//             <div>
//                 <label htmlFor="">Phone Number</label>
//                 <input 
//                 type="number" 
//                 onChange={(e)=>{setUser({...user, phone : parseInt(e.target.value)})}}
//                 // ref={phoneRef}
//                 className="form_text_input"
//                  placeholder='Enter your number'
//                  value ={user.phone} />
                
                
//                 {/* <button type = "button" onClick={()=>(passwordRef.current.type="password")}>Hide Password</button>
//                 <button type = "button"  onClick={()=>(passwordRef.current.type="text")}> Show Password</button> */}
//             </div>
//            <button type='submit' className="search_button_ form_submit">Submit</button>
//         </div>

//     </form>
//   </section>
//   )
// }

// export default LoginPage