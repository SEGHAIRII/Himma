import React from 'react'
import logo_white from './../assets/logo-white.svg'
import illustration from './../assets/illustration.png'
import blob from './../assets/blob.svg'
import { Link } from 'react-router-dom'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
    const gradient =" bg-clip-text text-transparent bg-gradient-to-r from-dark-yellow to-main-yellow";

  return (
    <div className=' relative flex flex-col font-roboto md:h-screen h-fit pb-24 w-full bg-gradient-to-br from-40% from-main-blue to-main-yellow to-[110%] '>
        <div className='flex justify-center md:justify-between py-4 px-8'>
            <div className='flex items-baseline '>
                <img className=' w-10 mr-4' src={logo_white} alt="" />
                <div className=' font-bold text-2xl text-white'>himma</div>
            </div>
            <div className=' hidden items-center md:flex'>
                <button className=' font-semibold text-white uppercase text-lg px-6 py-2 hover:text-main-yellow border-[1.5px] border-transparent hover:border-main-yellow duration-300 border-white nd:mr-4 mr-2'>
                    <p><Link to='login' > 
                        LogIn
                    </Link> 
                    </p>
                </button>
                <button className=' font-semibold text-white uppercase text-lg px-6 py-2 border-[1.5px] border-transparent hover:text-main-yellow hover:border-main-yellow duration-300 md:mr-4 mr-2'>
                    <p><Link to='signup' > 
                        SignUp
                    </Link> 
                    </p>
                </button>
                <button className='md:mr-4 mr-2'>
                    <AccountCircleIcon style={{fontSize:40}} className='text-white hover:text-main-yellow duration-300'></AccountCircleIcon>
                </button>
            </div>
        </div>
        <div className=' md:flex-1 flex flex-col space-y-12 mt-24 md:mt-0 md:grid md:grid-cols-3 w-full h-max'>
            <div className='md:px-24 px-12 col-span-2 font-bold text-4xl md:text-[3rem] flex justify-center items-center '>
                <p className='text-white'>
                    Empowering Voices, Inspiring Connection: <span className={`${gradient}`}>himma</span>, Where Your Story Finds Its Voice.
                </p>
            </div>
            <div className='md:pr-4 px-12 flex items-center justify-center relative'>
                <img src={illustration} alt="" className='vibrate-1 z-10 '/>
                </div>
        </div>
        <div className=' bottom-0 absolute w-full md:hidden flex h-20 bg-white justify-around'>
                <button className=' font-semibold text-black uppercase  px-6 py-1 hover:text-main-yellow border-[1.5px] border-transparent hover:border-main-yellow duration-300 border-white nd:mr-4 mr-2'>
                    <Link to='login' > 
                        LogIn
                    </Link> 
                </button>
                <button className='md:mr-4 mr-2'>
                    <AccountCircleIcon style={{fontSize:40}} className='text-black hover:text-main-yellow duration-300'></AccountCircleIcon>
                </button>
                <button className=' font-semibold text-black uppercase  px-6 py-1 border-[1.5px] border-transparent hover:text-main-yellow hover:border-main-yellow duration-300 md:mr-4 mr-2'>
                    <p>
                    <Link to='signup' > 
                        SignUp
                    </Link>    
                    </p>
                </button>
        </div>

    </div>
  )
}

export default Home