import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dasboard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard/>
  </StrictMode>,
)
