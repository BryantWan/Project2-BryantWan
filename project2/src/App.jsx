import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Division } from './components/division.jsx'
import { Character } from './components/OC.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
      <h1>Investigation Bureau of the Blue Rifle Corps</h1>
      <h2> <strong>WARNING:</strong> Unauthorized use without proper authorization from the IBBRC or the Chief of  Staff will result in severe punishment.</h2>
    </div>
    <div className="info">
      <Character/>
      <Division/>
    </div>
    </>
  )
}

export default App
