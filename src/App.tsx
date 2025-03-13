import '../src/css/App.css'
import '../src/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DriverGeneralStandings from './components/DriverGeneralStandings';
import Races from './components/Races';
import Header from "./components/Header.tsx";
import Container from "react-bootstrap/Container";
import {useCallback, useState} from "react";

function App() {
  const [routeName, setRouteName] = useState<string>("");

  const onRouteChanged = useCallback((name: string) => {
    setRouteName(name);
  }, []);

  return (
    <BrowserRouter>
      <Header
        title={routeName}
      />
      <Container>
        <Routes>
          <Route path="/" element={<DriverGeneralStandings onRouteChanged={onRouteChanged}/>} />
          <Route path="generalStandings" element={<DriverGeneralStandings onRouteChanged={onRouteChanged} />} />
          <Route path="races" element={<Races onRouteChanged={onRouteChanged} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App