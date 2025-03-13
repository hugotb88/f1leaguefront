import Header from "./Header";
import { db } from "../data/mocked";
import { useState } from "react";
import '../css/DriverGeneralStandings.css'

function DriverGeneralStandings() {
    // Load data from local
    const [data] = useState(db)

    return (
        <>
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
                                <span className="driver-gamertag">{driver.gamertag}</span>
                                <span className="team">{driver.team}</span>
                            </td>
                            <td >
                                <span className="points">{driver.championshipPoints}</span><i className="fas fa-chevron-right"></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default DriverGeneralStandings;