import React, { useEffect, useState } from 'react'
// import pic8 from "./Image/pic8.jpg"
// import abc from './pages/loginpage/usersdata/Card/pic8.jpg'
import pic8 from "../../../Components/Image/pic8.jpg"

import axios from 'axios';
import { Link } from 'react-router-dom';




const Card = () => {
const [gete, setGete] = useState([]);



useEffect(()=>{
    fetchUserDetails()
},[])

const fetchUserDetails = ()=>(
    axios.get("http://localhost:3000/user")
.then((resp)=>{
  setGete(resp.data)
  console.log(resp.data);
}))


const deletedata=(id)=>{
    axios.delete(`http://localhost:3000/user/${id}`)
    .then(()=>{
      console.log("data deleted")
      fetchUserDetails()
    })
  }


  return (
    <>
   <div>
 <section className='bg-blue-100 p-5 w-full justify-evenly items-center flex flex-wrap'>
{gete.map((items)=>(

  <div>

<div className='bg-black h-80 w-80  text-center rounded-xl shadow-lg'> 
   <p className='text-2xl font-bold text-white pt-5 mt-3'>USER PROFILE </p>
<img src={pic8} alt="" className=' w-60 h-32 ml-9 mt-2 border-yellow-500 border-8' />

<div className='text-lg font-medium mt-3 text-white'>{items.name}</div>
<div className='text-lg font-medium mt-2 text-white'>{items.email}</div>
<div className='flex justify-around'>
<div>
<Link to={`/editdata/${items.id}`}><button className='bg-green-400 p-2 mt-2 rounded-md text-xs font-normal text-white tracking-tighter'>
 EDIT PROFILE</button></Link>
</div>

<div>
<button className='bg-red-400 p-2 rounded-md mt-2 text-xs font-normal text-white tracking-tighter' onClick={()=>{deletedata(items.id)}}>DELETE PROFILE</button>
</div>
</div>
</div>
  </div>

))}

 </section>

   </div>

   
   </>
  )
}

export default Card

