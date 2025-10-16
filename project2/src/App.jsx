import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BRC from './assets/faction/BRC corps.png'
import './App.css'
import { Division } from './components/division.jsx'
import { Character } from './components/OC.jsx'
import {  Characterbio } from './components/OCbio.jsx'
import Yumi from "./assets/portraits/Yumi.png"
import Dongmei from "./assets/portraits/hornet.png"
import Amelia from "./assets/portraits/Amelia.png"

function App() {
  const [count, setCount] = useState(0)
  const [currentCharacter, setCurrentCharacter] = useState("Yumi")


  function changeToYumi() {
    setCurrentCharacter("Yumi");
  }

    function changeToDongmei() {
    setCurrentCharacter("Dongmei");
  }

    function changeToAmelia() {
    setCurrentCharacter("Amelia");
  }
  /* 
  1.) How to pass props into a component.
  2.) Conditional Rendering



  */
  return (
    <>
    <div className="top">
      <div className="logo">
        <img src={BRC} width="100px" />
        <h1>Blue Rifle Corps Investigation Bureau</h1>
      </div>
      <h2> <strong>WARNING:</strong> Unauthorized use without proper authorization from the BRCIB or the Chief of  Staff will result in severe punishment.</h2>
    </div>

    <div className="info">
      <div className="buttons">
        <button onClick={changeToYumi}>Yumi</button>
        <button onClick={changeToDongmei}> Dongmei </button>
        <button onClick={changeToAmelia}> Amelia Reed </button>
      </div>
      {currentCharacter == "Yumi" && <Character name = "Yumi" image = {Yumi} bio={Characterbio}/> }
      {currentCharacter == "Dongmei" && <Character name = "Dongmei" image = {Dongmei} bio={Characterbio}/>}
      {currentCharacter == "Amelia" && <Character name = "Amelia" image = {Amelia} bio={Characterbio}/>}
      <Division/>
    </div>
    </>
  )
}

export default App
