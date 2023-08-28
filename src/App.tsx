import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  React from 'react'
import Navigation from './Navigation/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Report from './pages/Report'
import Status from './pages/Status'
import Footer from './footer/Footer'
import Dashboard from './pages/Dashboard';
import Success from './pages/Success'

function App() {

  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/status' element={<Status/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
