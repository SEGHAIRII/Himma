import React, { useEffect, useState } from 'react'
import logo from './../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TuneIcon from '@mui/icons-material/Tune';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import handleSpeaking from '../utils/handleSpeaking';

const Navbar = () => {
  const [Search,setSearch]=useState('')

  const [showDropdown,setShowDropdown]=useState(false)
  const { transcript, toggleSpeechRecognition } = handleSpeaking();
  useEffect(()=>{
    setSearch(transcript)
    console.log(transcript)
  },[transcript])



  const ProfileDropdown=()=>{
    return(
      showDropdown&&
      <div className='absolute right-0 pb-2 top-14 rounded-2xl text-white font-semibold font-roboto w-56 bg-main-blue flex flex-col items-center'>
        <div className=' flex justify-center items-center p-2'> <p>Benostmane Fadhel</p> </div>
        <div className='h-1 mb-2 bg-white w-[90%]'></div>
        <div className='w-full  flex flex-col items-center'>
          <Link to='./profile' className='w-full px-8 flex py-2 space-x-8 hover:bg-dark-blue items-center duration-300'>
            <Person2Icon></Person2Icon>
            <p>Profile</p>
          </Link>
          <Link to='./settings' className='w-full px-8 flex py-2 space-x-8 hover:bg-dark-blue items-center duration-300'>
            <SettingsIcon></SettingsIcon>
            <p>Settings</p>
          </Link>
          <Link to='..' className='w-full px-8 flex py-2 space-x-8 hover:bg-dark-blue items-center duration-300'>
            <LogoutIcon></LogoutIcon>
            <p>Logout</p>
          </Link>
        </div>
        
      </div> 
    )
  }

  return (
    <nav className='font-roboto fixed bg-white z-20 flex items-center justify-between h-20 w-full px-4 md:px-12 py-2'>
        <div className=' flex justify-center items-baseline'>
          <Link to='/'>
          <img className=' w-6 md:w-12 md:mr-6' src={logo} alt="" />
          </Link>
        </div>
        <div className='flex items-center space-x-4 justify-between md:w-2/5'>
          <div className=' px-2 flex flex-1 items-center justify-around h-12 bg-main-gray bg-opacity-30 rounded-2xl'>
            <SearchIcon></SearchIcon>
            <input placeholder='Search' onChange={e=>setSearch(e.target.value)} value={Search} type="text" name='search'  className=' w-[80%] bg-transparent outline-none' />
            <KeyboardVoiceIcon className=' cursor-pointer ' onClick={toggleSpeechRecognition}></KeyboardVoiceIcon>
          </div>
        </div>
        <div className='relative'>

        <div onClick={()=>setShowDropdown(prev=>!prev)} className=' md:h-12 md:w-12 w-6 h-6 outline outline-2 outline-main-blue bg-main-yellow rounded-full cursor-pointer'>
        </div>
          <ProfileDropdown></ProfileDropdown>
        </div>

    </nav>
  )
}

export default Navbar