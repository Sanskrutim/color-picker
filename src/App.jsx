import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("pink")

  return (
    <>
      <div className=" w-full h-screen font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 justify-center text-center grid justify-items-stretch ">
        <div className='justify-self-center'>Color Picker</div>
        
        
        <div className="mt-16 h-[600px] grid content-center shadow-xl gap-5 shadow-slate-500 border-gray-500 border-solid rounded-xl" style={{backgroundColor: Color}}>
          <div className='grid grid-cols-16 gap-2 content-center  ' >
          
            <button className=" bg-red-600 p-6 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600" onClick={() => setColor("red")}></button>
          
          
            <button className=' bg-green-600 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(98, 193, 98)")}></button>
          
          
            <button  className=' bg-blue-700 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor(" #0000ff")}></button>
          
          
            <button className=' bg-yellow-400 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("yellow")}></button>
          
          
            <button className=' bg-pink-500 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(209, 97, 116)")}></button>
          
          
            <button className=' bg-teal-200 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor(" rgb(33, 245, 245)")}></button>
          
          
            <button className=' bg-orange-400 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("orange")}></button>
          
          
            <button className=' bg-fuchsia-950 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(73, 12, 73)")}></button>
          
          
            <button className=' bg-pink-300 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("#ffc0cb")}></button>
          

            <button  className=' bg-green-800 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("#006400")}></button>
          
          
            <button className=' bg-orange-400 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(217, 121, 61)")}></button>
          
          
            <button className=' bg-purple-500 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(87, 68, 134)")}></button>
          
          
            <button className=' bg-orange-950 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor(" rgb(100, 32, 32)")}></button>
        
          
            <button className=' bg-orange-600 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("#ff4500")}></button>
          

            <button className=' bg-blue-950 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor(" rgb(5, 5, 70)")}></button>

      
            <button className=' bg-yellow-700 p-3 rounded border-r-2 border-b-2 border-gray-600 shadow-lg shadow-slate-600'onClick={() => setColor("rgb(132, 132, 20)")}></button>

          </div>

          <div className='justify-center'>
            <button className=' bg-green-600 w-36 p-2 text-slate-300 'onClick={() => setColor("pink")}>Pick a color</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
