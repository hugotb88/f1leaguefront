import '../src/css/App.css'
import '../src/css/index.css'
import DriverGeneralStandings from './components/DriverGeneralStandings'
import Header from './components/Header'
import { db } from './data/mocked'
import { useState } from 'react'


function App() {

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
            <DriverGeneralStandings
              key={driver.id}
              driver={driver}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App