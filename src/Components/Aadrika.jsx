import React from 'react'
import { Link } from 'react-router-dom'

const Aadrika = () => {
  return (
    
          <div>
        <section>
         
          <div class="grid lg:grid-cols-2  justify-items-center text-center items-center overflow-hidden">
            <div class=" mt-7 h-70 text-4xl font-bold ">Welcome To Our <br/> Online Classes
             <br /><span><Link to="/login"><button className='text-white xl:w-40 p-1 m-6 rounded-xl bg-slate-700 shadow-lg shadow-black hover:bg-slate-950'>Log In</button> </Link><br />
      <Link to="/singup"><button className='text-white w-40 p-1 m-6 rounded-xl bg-lime-600 shadow-lg shadow-black hover:bg-lime-900'>Sing Up</button></Link></span>
            </div>
            <div class="text-center items-center ">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1oU_YGhT7ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='border-[10px] border-pink-500 mt-6'></iframe></div>
          </div>
        </section>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 text-center mt-10">
          <div class=" ">
            <p class="font-bold hover:underline ">OUR SERVICE</p> <br/>
            <span ><img src="https://i.ibb.co/X2cDT1W/1.jpg" alt="" class="ml-28 border-[15px] border-green-600 rounded-md shadow-lg shadow-black"/></span> <br/>
            <p class="m-7 text-purple-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea exercitationem illo repudiandae aperiam, ullam labore quod. Corporis quasi nostrum provident.</p>
          </div>
          <div class=" ">
            <p class="font-bold">MOUNTAIN</p> <br/>
            <span><img src="https://i.ibb.co/kS4yLg3/2.jpg" alt="" class="ml-28 border-[15px] border-orange-500 rounded-lg shadow-lg shadow-black"/></span> <br/>
            <p class="m-7 text-yellow-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea exercitationem illo repudiandae aperiam, ullam labore quod. Corporis quasi nostrum provident.</p>
          </div>
          <div class="">
            <p class="font-bold ">TECHNO</p> <br/>
            <span><img src="https://i.ibb.co/m5jTq5F/3.jpg" alt="" class="ml-28 border-[15px] border-green-600 rounded-lg shadow-lg shadow-black"/></span> <br/>
            <p class="m-7 text-cyan-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea exercitationem illo repudiandae aperiam, ullam labore quod. Corporis quasi nostrum provident.</p>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-12">
          <div class="col-span-6  font-bold h-14"><h1 class="mt-4 text-center text-4xl underline">Belief in action</h1></div>
          
          </div>
          <div class="grid grid-cols-12 mt-5">
          <div class="col-span-4 p-6">
          <div class="flex"><span><img src="https://i.ibb.co/b6SSPZ4/liimg3.jpg" alt="" className='border-[7px] border-black'/></span><span><p class="font-bold ml-4">Titels</p> <p class="ml-4 text-red-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div>
          <div class="flex"><span><img src="https://i.ibb.co/ScH3p7M/liimg2.jpg" alt="" className='border-[7px] border-black'/></span><span><p class="font-bold ml-4">Titels</p> <p class="ml-4 text-red-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div>
          <div class="flex"><span><img src="https://i.ibb.co/gMkxJkj/liimg1.jpg" alt=""className='border-[7px] border-black'/></span><span><p class="font-bold ml-4">Titels</p> <p class="ml-4 text-red-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div></div>
          <div class="col-span-4 p-6">
          <div class="flex"><span><img src="https://i.ibb.co/ScH3p7M/liimg2.jpg" alt="" className='border-[7px] border-black'/></span><span><p class="ml-5 font-bold">Titels</p> <p class="ml-6 text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div>
          <div class="flex"><span><img src="https://i.ibb.co/gMkxJkj/liimg1.jpg" alt="" className='border-[7px] border-black'/></span><span><p class="ml-5 font-bold">Titels</p> <p class="ml-6 text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div>
          <div class="flex"><span><img src="https://i.ibb.co/b6SSPZ4/liimg3.jpg" alt="" className='border-[7px] border-black'/></span><span><p class="ml-5 font-bold">Titels</p> <p class="ml-6 text-green-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus placeat necessitatibus.</p></span></div></div>
          <div class="col-span-4 p-7">
            <img src="https://i.ibb.co/m0KwQ9p/team-1024x768.jpg" alt="" className='border-[20px] border-yellow-400'/></div>
          </div>
        </div>
        </div>
      
    
  )
}

export default Aadrika
