import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white'
           style={{backgroundColor: "blue"}}
           onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white' 
          style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}>Purple</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white'
           style={{backgroundColor: "green"}}
           onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 rounded-full shadow-lg text-white'
           style={{backgroundColor: "gray"}}
           onClick={() => setColor("gray")}>Gray</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
