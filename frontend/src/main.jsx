import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Storecontextprovider from './Context/Storecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Storecontextprovider>
      <App />
    </Storecontextprovider>
  </BrowserRouter>,

)
