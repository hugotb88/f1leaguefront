import Header from "./Header";
import { db } from "../data/mocked";
import { useState } from "react";
import '../css/App.css'
import '../css/index.css'
import '../css/Header.css'


function DriverGeneralStandings() {
    // Load data from local
    const [data] = useState(db)

    return (
        <div>  
            <Header
            title="General Standings"
            />
            <table className="table-container">
                <tbody >
                    {data.map((driver) => (
                        <tr className={`table-content ${driver.teamCSS}`} >
                            <td>
                                <span className="position">{driver.championshipPosition}</span>
                                <span className="driver-name">{driver.name} - </span>
                                <span className="driver-surname">{driver.gamertag}</span>
                                <span className="team">{driver.team}</span>
                            </td>
                            <td>
                                <span className="points">{driver.championshipPoints}</span><i className="fas fa-chevron-right"></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default DriverGeneralStandings;