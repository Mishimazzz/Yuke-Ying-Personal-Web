import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import HomePage from './HomePage.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <title>Aoao Ying Web</title>
    <App />
  </StrictMode>,
)
