import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from './pages/AboutUs.jsx'
import Login from './pages/Login.jsx'

  
createRoot(document.getElementById('root')).render(
    <App />
)
