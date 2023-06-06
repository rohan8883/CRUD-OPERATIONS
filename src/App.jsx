import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aadrika from './Components/Aadrika'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Calculetor from './Components/Calculetor'


import Navbar from './Components/Navbar'


import LoginForm from './pages/loginpage/LoginForm'
import Fblogin from './pages/loginpage/singuppage/Fblogin'
import Send from './pages/sendsms/Send'
import Card from './pages/loginpage/usersdata/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/singup' element={<Fblogin/>}/>
  <Route path='/login' element={<LoginForm/>}/>
  <Route path='/'element={<Aadrika/>}/>
  <Route path='/sms' element={<Send/>}/>
  <Route path='/users' element={<Card/>}/>
  {/* <Route path='/cal' element={<Calculetor/>}/> */}
  
</Routes>

</BrowserRouter>

    </div>
  )
}

export default App
