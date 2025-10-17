import { useState } from 'react'

import BRC from './assets/faction/BRC corps.png'
import './App.css'
/*import { Division } from './components/division.jsx'*/
import { Character } from './components/OC.jsx'
import { Characterbio } from './components/OCbio.jsx'
import { YumiDivision } from './components/division.jsx'
import { DongmeiDivision } from './components/division.jsx'
import {AmeliaDivision} from './components/division.jsx'
import Yumi from "./assets/portraits/Yumi.png"
import Dongmei from "./assets/portraits/Dongmei.png"
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
        <button onClick={changeToYumi}>Yumi Chen</button>
        <button onClick={changeToDongmei}> Dongmei Chen </button>
        <button onClick={changeToAmelia}> Amelia Reed </button>
      </div>
      <div className="character-display">
        {currentCharacter === "Yumi" && (
          <Character 
            name="Yumi Chen" 
            image={Yumi} 
          />
        )}
        {currentCharacter === "Dongmei" && (
          <Character 
            name="Dongmei Chen" 
            image={Dongmei} 
          />
        )}
        {currentCharacter === "Amelia" && (
          <Character 
            name="Amelia" 
            image={Amelia} 
          />
        )}
      </div>
        <div className="bio">
          <Characterbio name={currentCharacter} bio={
            currentCharacter === "Yumi" ? "Yumi's bio here" :
            currentCharacter === "Dongmei" ? "Dongmei's bio here" :
            currentCharacter === "Amelia" ? "Amelia's bio here" :
            "This person cannot be found."
          }/>
        </div>
        <div className="division">
        {currentCharacter === "Yumi" && <YumiDivision />}
        {currentCharacter === "Dongmei" && <DongmeiDivision />}
        {currentCharacter === "Amelia" && <AmeliaDivision />}
        </div>
    </div>
    </>
  )
}

export default App
