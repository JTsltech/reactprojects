import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = 
  useState(false)
  const [characterAllowed, setcharacterAllowed] = 
  useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passRef = useRef(null)


  //useCallbak hook
  const passwordGenerator  = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "012345679"
    if(characterAllowed) str += "@$%^&*(){}~`"

    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },
    [length,numberAllowed,characterAllowed,setPassword])
  
  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect hook
  useEffect(() => {
    passwordGenerator()
  },
  [length,numberAllowed,characterAllowed,passwordGenerator])
    return (
    <>
      <div className='w-100 h-screen p-2'>
        <div className='w-full max-w-md mx-auto shadow-md
        rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700'>
          <div className='flex shadow rounded-lg overflow-hidden
            mb-4'>
              <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly ref={passRef}
              />
              <button onClick={copyToClipboard}
              className='outline-none bg-blue-700 text-white px-3 py-0.5 
              rounded-none shrink-0'>copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                  <input type="range"
                  min={6}
                  max={100}
                  value={length}
                  onChange={(e) => {setLength(e.target.value)}}
                  className='cursor-pointer'/>
                  <label>Length : {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => 
                    {setnumberAllowed((val) => !val)}}
                  className='cursor-pointer'/>
                  <label>Number</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                  defaultChecked={characterAllowed}
                  id="charInput"
                  onChange={() => 
                    {setcharacterAllowed((val) => !val)}}
                  className='cursor-pointer'/>
                  <label>Character</label>
              </div>
            </div>
          </div>
      </div>      
    </>
  )
}

export default App
