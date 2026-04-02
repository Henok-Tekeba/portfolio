import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem('theme')
const initialTheme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light'
document.documentElement.setAttribute('data-theme', initialTheme)
if (!savedTheme) localStorage.setItem('theme', initialTheme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)