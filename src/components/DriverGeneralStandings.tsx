import { db } from "../data/mocked";
import {useEffect, useState} from "react";
import '../css/DriverGeneralStandings.css'
import {DriverGeneral} from "../types";

const NAME = "General Standings"
function DriverGeneralStandings({
  onRouteChanged
}: {
  onRouteChanged: (routeName: string) => void;
}) {
    // Load data from local
    const [data] = useState<DriverGeneral[]>(db);

    useEffect(() => {
      onRouteChanged(NAME)
    }, [onRouteChanged]);

    return (
          <table className="table-container">
              <tbody>
                  {data.map((driver) => (
                      <tr key={driver.id} className={`table-content ${driver.teamCSS}`} >
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
    )
}

export default DriverGeneralStandings;