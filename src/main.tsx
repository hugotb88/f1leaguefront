import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/App.css'
import '../src/css/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
