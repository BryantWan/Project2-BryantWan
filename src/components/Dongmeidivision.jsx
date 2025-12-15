import paratrooper from "../assets/Infantry/paratroop.png"
import engineer from "../assets/Support/Engineer.png"
import recon from "../assets/Recon/Recon.png"
import blankslot from "../assets/Blank_slot.png"
export function DongmeiDivision() {
  return  ( <div className="division">
                <h2>Blue Rifle Corps Air Corps Division</h2>
                <table class="template" border="1">
                    <tbody>
                    <tr>
                        <th> Support Company </th>
                        <th> Regiment 1 </th>
                        <th> Regiment 2 </th>
                        <th> Regiment 3 </th>
                        <th> Regiment 4 </th>
                    </tr>
                    <tr>
                        <td> <img src={engineer}/> </td>
                        <td> <img src={paratrooper}/> </td>
                        <td> <img src={paratrooper}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> <img src={recon}/> </td>
                        <td> <img src={paratrooper}/> </td>
                        <td> <img src={paratrooper}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> <img src={blankslot}/> </td>
                        <td> <img src={blankslot}/> </td>
                        <td> <img src={blankslot}/> </td>
                        <td> <img src={blankslot}/> </td>
                        <td> <img src={blankslot}/> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
  )



}