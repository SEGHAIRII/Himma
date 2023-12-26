import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import ResetPassword from './pages/ResetPassword'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={Home()}></Route>
        <Route path='login' element={SignIn()} ></Route>
        <Route path='signup' element={SignUp()} ></Route>
        <Route path='resetpassword' element={ResetPassword()} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
