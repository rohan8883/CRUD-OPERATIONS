import React, { useState } from 'react'

const Calculetor = () => {

    const [result, setResult] = useState("");

    const logic =(event)=>{
        setResult(result.concat(event.target.value))
        }

        const resetdata =()=>{
            setResult("")
        }

        const finalresult =()=>{
            setResult (eval(result).toString())
        }
    
  return (
    <div className='bg-slate-300 h-[650px] justify-center text-center w-full mt-3' >
         <section className=' bg-black w-1/4 ml-[470px]  border-4 border-red-700 h-96 rounded-2xl content-center'>
      <input type="text" placeholder='00' value={result} className='h-12
       bg-orange-300 font-bold text-2xl text-end w-full outline-none border-b-4 rounded-xl'/>
       <br /> <div className='bg-slate-700 font-extrabold text-2xl m-4 rounded-md p-1'>
    <input type="button" value="9" onClick={logic}   className='bg-green-400 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-green-500
    '/>
      <input type="button" value="8" onClick={logic} className='bg-yellow-400 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-yellow-500
'/>
      <input type="button" value="7" onClick={logic} className='bg-blue-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-blue-800'/>
      <input type="button" value="+" onClick={logic} className='bg-red-400 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-500'/> <br />
      <input type="button" value="6" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="5" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="4" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="-" onClick={logic} className='bg-green-800 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-green-950'/> <br />
      <input type="button" value="3" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="2" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="1" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="*" onClick={logic} className='bg-yellow-500 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-yellow-600'/> <br />
      <input type="button" value="00" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="0" onClick={logic} className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
    
      
      {/* <input type="button" value="%" onClick={logic}/> */}
      <input type="button" value="C" onClick={resetdata}  className='bg-red-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-red-900'/>
      <input type="button" value="=" onClick={finalresult}  className='bg-blue-700 h-16 w-16 border-8
    rounded-xl shadow-md shadow-black m-1 cursor-pointer hover:bg-blue-900'/> </div>
      </section>
    </div>
  )
}

export default Calculetor
