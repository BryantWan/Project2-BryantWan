import infantry from "../assets/Infantry/Infantry.png"
import engineer from "../assets/Support/Engineer.png"
import paratrooper from "../assets/Infantry/Paratroop.png"
import recon from "../assets/Support/Recon.png"
import artillery from "../assets/Support/Support_artillery.png"
import signal from "../assets/Support/Signal_company.png"
import blankslot from "../assets/Blank_slot.png"
import MP from "../assets/Support/Military_Police.png"
import bike from "../assets/Infantry/Bicycle_Battalion.png"
import cavalry from "../assets/Mobile/Cavalry.png"
import modtank from "../assets/Armor/Modern_Tank.png"
import motorized from "../assets/Mobile/Motorized.png"
import maintanence from "../assets/Support/Maintenance_company.png"
import logistics from "../assets/Support/Logistics_company.png"
import double from "../assets/Amelia only/smolbarrel.jpg"
import R700 from "../assets/Amelia only/R700.jpg"
import glock from "../assets/Amelia only/smolglock.jpg"

export function YumiDivision() {
  return (
    <div className="division">
      <h2>Blue Rifle Corps Infantry Divsion</h2>
      <table border="1">
        <tbody>
          <tr>
            <th>Support Company</th>
            <th>Regiment 1</th>
            <th>Regiment 2</th>
            <th>Regiment 3</th>
            <th>Regiment 4</th>
          </tr>
          <tr>
            <td> <img src={artillery} alt="artillery" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={engineer} alt="engineer" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td> <img src={infantry} alt="Infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function DongmeiDivision() {
  return (
    <div className="division">
      <h2>Blue Rifle Corps Air Corps Division</h2>
      <table class="template" border="1">
        <tbody>
          <tr>
            <th>Support Company</th>
            <th>Regiment 1</th>
            <th>Regiment 2</th>
            <th>Regiment 3</th>
            <th>Regiment 4</th>
          </tr>
          <tr>
            <td> <img src={recon} alt="Recon" /> </td>
            <td> <img src={paratrooper} alt="paratrooper" /> </td>
            <td> <img src={paratrooper} alt="paratrooper" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={engineer} alt="engineer" /> </td>
            <td> <img src={paratrooper} alt="paratrooper" /> </td>
            <td> <img src={paratrooper} alt="paratrooper" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={signal} alt="signal" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function AmeliaDivision() {
  return (
    <div className="division">
      <h2>Amelia Reed's Loadout</h2>
      <table class="loadout" border="1">
        <tbody>
          <tr>
            <th>Primary</th>
            <th> <img src={double} alt="double barrel" /> </th>
          </tr>
          <tr>
            <td> Second Primary </td>
            <td> <img src={R700} alt="Remington 700" /> </td>
          </tr>
          <tr>
            <td> Sidearm </td>
            <td> <img src={glock} alt="Glock 17" /> </td>
          </tr>
        </tbody>
      </table>
      <br></br>What? You seriously thought Amelia Reed has a military division? She's an untrained civilian survivalist in a zombie apocalypse for goodness sake! Do you SERIOUSLY think she can lead a military division with no military training nor any knowledge about tactics? She can barely even operate a firearm properly...
    </div>
  );
}

export function BlueSWATDivision() {
  return (
    <div className="division">
      <h2>Blue Rifle Corps Military Police</h2>
      <table class="template" border="1">
        <tbody>
          <tr>
            <th>Support Company</th>
            <th>Regiment 1</th>
            <th>Regiment 2</th>
            <th>Regiment 3</th>
            <th>Regiment 4</th>
          </tr>
          <tr>
            <td> <img src={MP} alt="MP" /> </td>
            <td> <img src={cavalry} alt="cavalry" /> </td>
            <td> <img src={infantry} alt="infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>  </td>
            <td> <img src={infantry} alt="infantry" /> </td>
            <td> <img src={infantry} alt="infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> </td>
            <td> <img src={infantry} alt="infantry" /> </td>
            <td> <img src={infantry} alt="infantry" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function SophieDivision() {
  return (
      <div className="division">
      <h2>Black League Division</h2>
      <table border="1">
        <tbody>
          <tr>
            <th>Support Company</th>
            <th>Regiment 1</th>
            <th>Regiment 2</th>
            <th>Regiment 3</th>
            <th>Regiment 4</th>
          </tr>
          <tr>
            <td> <img src={artillery} alt="artillery" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={modtank} alt="modtank" /> </td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={engineer} alt="engineer" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={modtank} alt="modtank" /> </td>
            <td></td>
          </tr>
          <tr> 
            <td> <img src={maintanence} alt="maintanence" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={logistics} alt="logistics" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td> <img src={motorized} alt="motorized" /> </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> <img src={blankslot} alt="blank" /> </td>
            <td>  </td>
            <td>  </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}