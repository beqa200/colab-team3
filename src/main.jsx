import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginProvider from './context/LoginProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
        <App />
    </LoginProvider>
   
  </StrictMode>,
)
