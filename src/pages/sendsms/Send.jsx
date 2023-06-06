import React from 'react'
import { Link } from 'react-router-dom'

const Send = () => {
    
  return (
    <div className='h-[650px]  w-full mt-3'>
      <section className='bg-blue-400  border-white text-center justify-center w-1/2 h-[600px] ml-80 border-dashed rounded-3xl border-[5px]'>
        <p className='font-bold text-2xl mt-4'>SEND MAIL</p>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae quod aperiam a deleniti exercitationem ut cupiditate dolorum alias dolore.</p>
        <form action="">
            <input type="text"placeholder='Enter Full Name' className='bg-green-300 h-10 w-96 outline-none text-center text-white font-bold rounded-xl border-b-2 '  /> <br />
            <input type="text" placeholder='Enter the Mobile no.' className='bg-red-500 h-10 w-96 outline-none mt-3 text-center text-white font-bold rounded-xl border-b-2' /> <br />
            
            <textarea rows="4" cols="50" placeholder='Inter the feadbacks ' className='bg-slate-400 h-72 rounded-xl mt-4 text-white font-semibold' ></textarea> <br />
           <a href=""><Link to="/"><button className='w-40 bg-[#F70000] mt-1 h-10 rounded-2xl font-semibold border-2 shadow-black border-black hover:bg-[#861111]'type='submit'>SUBMIT</button></Link></a>
        </form>
      </section>
    </div>
  )
}

export default Send
