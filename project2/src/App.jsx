import { useState } from 'react'

import BRC from './assets/Faction/BRC corps.png'
import './App.css'
/*import { Division } from './components/division.jsx'*/
import { Character } from './components/OC.jsx'
import { Characterbio } from './components/OCbio.jsx'
import { YumiDivision } from './components/division.jsx'
import { DongmeiDivision } from './components/division.jsx'
import {AmeliaDivision} from './components/division.jsx'
import {BlueSWATDivision} from './components/division.jsx'
import {SophieDivision} from './components/division.jsx'
import Yumi from "./assets/portraits/Yumi.png"
import Dongmei from "./assets/portraits/Dongmei.png"
import Amelia from "./assets/portraits/Amelia.png"
import Blue from "./assets/portraits/Blue.png"
import Sophie from "./assets/portraits/Sophie.png"

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

  function changeToBlue() {
    setCurrentCharacter("Blue");
  }

  function changetoSophie() {
    setCurrentCharacter("Sophie");
  }

  function handleCharacterChange(character) {
    switch (character) {
      case "Yumi":
        return "Yumi's bio here";
      case "Dongmei":
        return "Dongmei's bio here";
      case "Blue":
        return "Blue's bio here";
      case "Sophie":
        return "Sophie's bio here";
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
      case "Blue":
        return <BlueSWATDivision />;
      case "Sophie":
        return <SophieDivision />;
      case "Amelia":
        return <AmeliaDivision />;
      default:
        return null;
    }
  }

  function portraitnamechange(character) {
    switch (character) {
      case "Yumi":
        return <Character 
            name="Yumi Chen" 
            image={Yumi} 
          />;
      case "Dongmei":
        return <Character 
            name="Dongmei Chen" 
            image={Dongmei} 
          />;
      case "Blue":
        return <Character 
            name="Blue SWAT" 
            image={Blue} 
          />;
      case "Sophie":
        return <Character 
            name="Sophie Yazov" 
            image={Sophie} 
          />;
      case "Amelia":
        return <Character 
            name="Amelia Reed" 
            image={Amelia} 
          />;
      
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
        <button onClick={changeToBlue}> Blue SWAT </button>
        <button onClick={changetoSophie}> Sophie Yazov </button>
        <button onClick={changeToAmelia}> Amelia Reed </button>

      </div>
      <div className="character-display">
        {portraitnamechange(currentCharacter)}
        {/*{currentCharacter === "Yumi" && (
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
        {currentCharacter === "Blue" && (
          <Character 
            name="Blue SWAT" 
            image={Blue} 
          />
        )}*/}
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
