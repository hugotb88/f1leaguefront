import type { DriverGeneral } from "../types";
import '../index.css'

// Creating a Type for the props of Header
type DriverGeneralProps = {
    driver: DriverGeneral
}

function DriverGeneralStandings({ driver }: DriverGeneralProps) {
    return (
        <tr className={`table-content ${driver.teamCSS}`}>
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
    )
}

export default DriverGeneralStandings;