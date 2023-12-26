import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import ResetPassword from './pages/ResetPassword'
import Search from './pages/Search'
import { useSelector } from 'react-redux'
function App() {

  const user =useSelector(state=>state.data.user.user)
  console.log(user)
  useEffect(()=>{

  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={user==null?Search():Home()}></Route>
        <Route path='login' element={SignIn()} ></Route>
        <Route path='signup' element={SignUp()} ></Route>
        <Route path='resetpassword' element={ResetPassword()} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
