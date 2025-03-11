import '../src/css/App.css'
import '../src/css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DriverGeneralStandings from './components/DriverGeneralStandings';
import Races from './components/Races';
import Layout from './Router/Layout';
import Home from './components/Home';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="home" element={<Home />} />
        <Route path="generalStandings" element={<DriverGeneralStandings />} />
        <Route path="races" element={<Races />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App