import { useEffect, useState } from 'react'
import './App.css'
import 'core-js';
import regeneratorRuntime from "regenerator-runtime";
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import ResetPassword from './pages/ResetPassword'
import Search from './pages/Search'
import { useSelector } from 'react-redux'
import StoryDetailed from './pages/StoryDetailed';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function App() {

  const user =useSelector(state=>state.data.user.user)
  console.log(user)
  
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={user != null ? <Search /> : <Home />}></Route>
        {
          !user&&
          <>
            <Route path='login' element={<SignIn />} ></Route>
            <Route path='signup' element={<SignUp />} ></Route>
            <Route path='resetpassword' element={<ResetPassword />} ></Route>
          </>

        }
        {
          user&&
          <>
            <Route path='story/:id' element={<StoryDetailed></StoryDetailed>}></Route>
          </>
        }
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
