import React, { useState } from 'react'
import logo from './../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TuneIcon from '@mui/icons-material/Tune';
const Navbar = () => {
  const [search,setSearch]=useState('')

  const ProfileDropdown=()=>{
    return(
      <div>

      </div>
    )
  }

  return (
    <nav className='font-roboto flex items-center justify-between h-20 w-full px-12 py-2'>
        <div className=' flex justify-center items-baseline'>
          <img className=' w-12 mr-6' src={logo} alt="" />
        </div>
        <div className='flex items-center space-x-4 justify-between w-2/5'>
          <div className=' px-2 flex flex-1 items-center justify-around h-12 bg-main-gray rounded-2xl'>
            <SearchIcon></SearchIcon>
            <input placeholder='Search' onChange={e=>setSearch(e.target.value)} value={search} type="text" name='search'  className=' w-[80%] bg-transparent outline-none' />
            <KeyboardVoiceIcon></KeyboardVoiceIcon>
          </div>
          <div className=' cursor-pointer hover:opacity-75 duration-300'>
            <TuneIcon></TuneIcon>
          </div>
        </div>
        <div className=' h-12 w-12 outline outline-2 outline-main-blue bg-main-yellow rounded-full cursor-pointer'>
          
        </div>

    </nav>
  )
}

export default Navbar