import React, { useState } from 'react'
import logo_white from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {toast, ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {

    const buttonHandler = async (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/register", {"fullname":fullname,"email":email, "password":password})
        .then(response => {
            console.log('Response:', response.data);
    // Handle the response data as needed
        })
        .catch(error => {
        toast.error('Error:', error);
    })
}
    const [email,setEmail]=useState('')
    const [fullname,setFullname]=useState('')
    const [password,setPassword]=useState('')
  return (
    <div className='h-screen w-full relative font-roboto'>
        <ToastContainer />
        <div className='w-full h-1/2 bg-gradient-to-r from-30% from-main-yellow to-main-blue grid grid-rows-4 place-items-center'>
            <div className=' flex justify-center items-center row-span-1 place-items-center w-full'>
                <img src={logo_white} alt="" className=' w-14 mt-12 '/>
            </div>
        </div>
        <div className='md:pt-8 pt-24  pb-4 shadow-lg flex flex-col items-center justify-around ring-offset-2 absolute w-4/5 md:w-3/5 h-3/5 bg-white top-1/2 left-1/2 inset-0 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
            <h1 className=' font-bold uppercase text-2xl'>Sign Up</h1>
            <input value={fullname} onChange={(e)=>setFullname(e.target.value)} name='text' placeholder='Full Name' className='  text-lg placeholder:font-light outline-none border-[1.5px] border-main-blue w-4/5 md:w-3/5 h-12 2xl:h-16  px-4 ' type="email" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='email' className='  text-lg placeholder:font-light outline-none border-[1.5px] border-main-blue w-4/5 md:w-3/5 h-12 2xl:h-16  px-4 ' type="email" />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='password' className='  text-lg mb-2 placeholder:font-light outline-none border-[1.5px] border-main-blue w-4/5 md:w-3/5 h-12 2xl:h-16  px-4 ' type="password" />
            
            <div className=' w-4/5 md:w-3/5 flex justify-between'>
                <button className='w-[35%] md:w-[25%] rounded-lg h-12 bg-gradient-to-r from-light-blue to-main-blue' onClick = {buttonHandler}>
                    <p className='font-semibold text-lg text-white'>SIGNUP</p>
                </button>
                <div className=' flex items-center justify-end font-semibold text-main-blue'><p>
                <Link to='./../login' > 
                Have an Account?
                    </Link> 
                    </p></div>

            </div>
        </div>

    </div>
  )
}

export default SignUp