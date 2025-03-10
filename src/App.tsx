import './App.css'
import './index.css'
import DriverGeneralStandings from './components/DriverGeneralStandings'
import { db } from './data/mocked'
import { useState } from 'react'

function App() {

  // Load data from local
  const [data] = useState(db)

  return (
    <>
      <table className="table-container">
        {data.map((driver) => (
          <DriverGeneralStandings
            driver={driver}
          />
        ))}

      </table>
    </>
  )
}

export default App
