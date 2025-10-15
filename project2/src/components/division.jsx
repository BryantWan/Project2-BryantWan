import infantry from "../assets/Infantry/Infantry.png"
import engineer from "../assets/Support/Engineer.png"
import artillery from "../assets/Combat Support/Artillery.png"  
import blankslot from "../assets/Blank_slot.png"
export function Division() {
  return  ( <div className="division">
                <h2>Blue Rifle Corps Infantry Division</h2>
                <table border="1">
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
                        <td> <img src={infantry}/> </td>
                        <td> <img src={infantry}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> <img src={artillery}/> </td>
                        <td> <img src={infantry}/> </td>
                        <td> <img src={infantry}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> <img src={infantry}/> </td>
                        <td> <img src={infantry}/> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> <img src={infantry}/> </td>
                        <td> <img src={infantry}/> </td>
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