import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
     <nav class="grid grid-cols-12 bg-neutral-200 h-16  shadow-lg shadow-black overflow-hidden">
            <div class="col-span-3"><img src="https://i.ibb.co/F7p6t8x/Full-Logo.png" alt="" class="h-14 ml-14 "/></div>
            <div class="col-span-6"><ul class="flex space-x-20 m-5 text-lg font-bold cursor-pointer">
            <li><Link to="/">HOME </Link></li>
            <li>ABOUT</li>
            <li><Link to="/">FORM</Link></li>
            <li><Link to="/users">USERS</Link></li>
            <li> <Link to="/sms">CONTACT</Link></li></ul></div>
            <div class="col-span-3 m-5 ml-32 font-bold">777-444-9999  ...</div>
          </nav>
    </div>
  )
}

export default Navbar
