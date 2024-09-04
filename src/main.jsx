import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AudioProvider } from './components/AudioContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <AudioProvider>
          <App />
        </AudioProvider>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
)
