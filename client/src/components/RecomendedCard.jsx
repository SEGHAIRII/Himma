import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

const RecomendedCard = ({user,title,id}) => {
  return (
    <div className=' flex-shrink-0 rounded-lg w-[75%] md:w-[40%] shadow-lg bg-main-gray bg-opacity-50 '>
        <div className='flex pt-6 mb-4 items-center px-4'>
            <div className=' w-8 h-8 aspect-square rounded-full bg-main-yellow outline outline-2 outline-main-blue mr-4'></div>
            <p className=' text-xs md:text-sm '>{user.fullname}</p>
        </div>
        <Link className='font-bold text-main-blue text-xl md:text-2xl ' to={`/story/${id}`}>
            <h3 className=' pt-2 pb-8 px-4'>
                {title}
            </h3>
        </Link>
    </div>
  )
}

export default RecomendedCard