import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='text-red-200'>Vite + React</h1>
      <button className='btn'>click</button>
     
    </>
  )
}

export default App
