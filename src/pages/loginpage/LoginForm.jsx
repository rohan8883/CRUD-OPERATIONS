import React from 'react'
import { Link } from 'react-router-dom'


const LoginForm = () => {
    
  return (
 
 <div className='bg-blue-300 h-[700px] w-full -mt-20 mix-blend-hard-light pt-24 space-'>

    <div className='sm:w-1/2 sm:ml-20 mt-20 md:ml-48  lg:ml-64 xl:ml-80 bg-[#FFFFFF] rounded-xl h-96 sm1:w-3/4 sm1:ml-9' >
    <section className='grid grid-cols-2 sm1:-ml-40 sm:-ml-0'>
    <div className='sm1:invisible sm:visible'><img src="https://i.ibb.co/6ZsYKBx/Whats-App-Image-2023-04-15-at-10-08-43-AM-1.jpg"  alt="" className='xl:mt-32 lg:mt-32 md:mt-36'/></div>

    <div className='space-y-4'>
    <div className='sm1:mt-3 sm:mt-7'>
      <img src="https://i.ibb.co/y6Kh5Qk/Whats-App-Image-2023-04-15-at-10-08-43-AM.jpg" alt="" className='w-11 ml-16 lg:ml-28 ' />
     </div>
     <p className=' font-bold text-xl text-blue-700 ml-16 lg:ml-28'>Login</p>
     <div>
      <label htmlFor="" className='sm1:text-sm sm:text-base sm:font-semibold text-blue-600 space-y-2 ml-3'>Email</label> <br />
     <input type="text" placeholder='Email..' className='mt-3 w-3/4 ml-3 h-8 outline-none border-b-2 border-[#D5D5D5] sm1:text-sm sm:text-base'/>
    </div>
    <div>
      <label htmlFor="" className='sm1:text-sm sm:text-base sm:font-semibold text-blue-600 ml-3'>Password</label> <br />
     <input type="password" placeholder='Password..' className='ml-3 mt-3 w-3/4 h-8 outline-none border-b-2 border-[#D5D5D5] mb-3 sm1:text-sm sm:text-base'/>
    <a href="" className='underline text-blue-700 ml-6 mt-4 sm:ml-16  lg:ml-32 xl:ml-44 sm1:ml-12 tracking-tighter text-xs'>click here to register</a> <br />
    <Link to="/"><button className='bg-blue-700 rounded-md w-1/2 mt-2 hover:bg-blue-800 text-white text-lg text-center items-center sm:ml-14 sm1:ml-10 sm1:h-6 sm1:text-base md:w-1/3 lg:ml-24'>Submit</button></Link>
    </div>
    </div>
    
    </section>
  
    </div>
 </div>
  )
}

export default LoginForm
