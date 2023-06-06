import React, { useState } from 'react'
// import fbc from './Image/fb.svg'
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';




const Fblogin = () => {
  
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      pass: '',
      cpass: '',
    },
    onSubmit: values => {
      // Handle form submission
      handleSubmit(values);
      navigate("/")
    },
  });

  const handleSubmit = values => {
    try {
      // Send form data to the server using Axios
      const response = axios.post('http://localhost:3000/user', values);
      console.log(response.data);
      console.log(values);
      
    } catch (error) {
      console.error(error);
      
    }
  };
  

  return (

    <div className="bg-[#F0F2F5]" >
       <div className=" p-32  mx-auto items-center justify-center grid sm:grid-cols-2" >
  <div className="left mx-3 mr-20">
    {/* <img src={fbc} alt="" className="h-28" /> */}
<p className="ml-8 -mt-4 text-3xl">Facebook helps you connect and share <br/> with the people in your life.</p></div>
  <div className="  flex flex-col  rounded-xl p-8 bg-white mt-8">

<form onSubmit={formik.handleSubmit}>

<input className="-mt-4 px-4 border border-1 outline-blue-600 h-12 text-lg rounded-md w-full" 
type="text"
 name="name" 
 placeholder="Enter Phone Number"
 value={formik.values.name}
 onChange={formik.handleChange}
 />

<input className="px-4 border border-1 outline-blue-600 mt-2 text-lg h-12 rounded-md w-full" 
type="email"
 name="email" 
 placeholder="Enter Email"
 value={formik.values.email}
 onChange={formik.handleChange}
 />

<input className="px-4 border border-1 outline-blue-600 mt-2 text-lg h-12 rounded-md w-full"
 type="password"
  name="pass"
   placeholder="Enter Password"
   value={formik.values.pass}
   onChange={formik.handleChange}
   />

<input className="px-4 border border-1 outline-blue-600 mt-2 text-lg h-12 rounded-md w-full" 
type="password"
 name="cpass"
placeholder="Enter Conform Password" 
value={formik.values.cpass}
onChange={formik.handleChange}
/>

 
<hr className="mt-3" />

<button type='submit' className="bg-[#3DAE25] text-white text-center mt-3 h-12 w-full rounded-lg text-lg hover:bg-green-800 tracking-tighter">Create New Account</button>

</form>
  </div>
  </div>
    </div>
  )
}

export default Fblogin
