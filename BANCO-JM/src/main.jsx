import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CpfContextProvider } from './context/CpfContext';
import { EstadoContextProvider } from './context/EstadoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstadoContextProvider>
      <CpfContextProvider>
        <App />
      </CpfContextProvider>
    </EstadoContextProvider>
  </React.StrictMode>,
)
