import { useState } from 'react'

import BRC from './assets/Faction/BRC corps.png'
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

  function handleCharacterChange(character) {
    switch (character) {
      case "Yumi":
        return "Yumi's bio here";
      case "Dongmei":
        return "Dongmei's bio here";
      case "Amelia":
        return "Amelia's bio here";
      default:
        return "This person cannot be found.";
    }
  }
  
  function divisionchange(character) {
    switch (character) {
      case "Yumi":
        return <YumiDivision />;
      case "Dongmei":
        return <DongmeiDivision />;
      case "Amelia":
        return <AmeliaDivision />;
      default:
        return null;
    }
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
      <h2> <span style={{color: 'red', fontWeight: 'bold'}}>WARNING:</span> Unauthorized use without proper authorization from the BRCIB or the Chief of  Staff will result in severe punishment.</h2>
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
          <Characterbio name={currentCharacter} bio={handleCharacterChange(currentCharacter)}/>
        </div>
        <div className="division">
        {divisionchange(currentCharacter)}
        </div>
    </div>
    </>
  )
}

export default App
