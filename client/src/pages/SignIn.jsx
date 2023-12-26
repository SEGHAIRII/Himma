import React, { useState } from 'react'
import logo_white from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/features/userSlice'

const SignIn = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const dispatch=useDispatch()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(loginUser({username:'amor'}))
    }
  return (
    <div className='h-screen w-full relative font-roboto'>
        <div className='w-full h-1/2 bg-gradient-to-r from-30% from-main-yellow to-main-blue grid grid-rows-4 place-items-center'>
            <div className=' flex justify-center items-center row-span-1 place-items-center w-full'>
                <img src={logo_white} alt="" className=' w-14 mt-12 '/>
            </div>
        </div>
        <div className='md:pt-8 pt-24  pb-4 shadow-lg flex flex-col items-center justify-around ring-offset-2 absolute w-4/5 md:w-3/5 h-3/5 bg-white top-1/2 left-1/2 inset-0 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
            <h1 className=' font-bold uppercase text-2xl'>Log in</h1>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='username' className=' capitalize text-lg placeholder:font-light outline-none border-[1.5px] border-main-blue w-4/5 md:w-3/5 h-12 2xl:h-16  px-4 ' type="email" />
            <div className=' w-full flex flex-col items-center'>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='password' className=' capitalize text-lg mb-2 placeholder:font-light outline-none border-[1.5px] border-main-blue w-4/5 md:w-3/5 h-12 2xl:h-16  px-4 ' type="password" />
                <div className=' w-4/5 md:w-3/5 flex justify-end font-semibold text-main-blue'><p><Link to='./../resetpassword'>Forgot Password?</Link></p></div>
            </div>
            <div className=' w-4/5 md:w-3/5 flex justify-between'>
                <button onClick={handleLogin} className='w-[35%] md:w-[25%] rounded-lg h-12 bg-gradient-to-r from-light-blue to-main-blue'>
                    <p className='font-semibold text-lg text-white'>LOGIN</p>
                </button>
                <button className='uppercase w-[35%] md:w-[25%] rounded-lg h-12 bg-gradient-to-r from-main-yellow to-dark-yellow'>
                    <p className='font-semibold text-lg text-white'><Link to='./../signup' > 
                        SignUp
                    </Link> </p>
                </button>
            </div>
        </div>

    </div>
  )
}

export default SignIn