import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
           <Route path='/' element={ <App/>}></Route>
            <Route index element = {<Home/>}></Route>
            <Route path='Login' element = {<Login/>}></Route>
            <Route path='Register' element = {<Register/>}></Route>
            <Route path='*' element={<h2>No existe</h2>}></Route>

          

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
