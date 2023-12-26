import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import handleHearing from '../utils/handleHearing';

const StoryCard = ({title,user,details,topics,date,likes}) => {

    
  return (
    <div className='font-rubik flex flex-col w-[90%] md:w-[80%] pt-6 pb-2 px-8 rounded-[3rem] drop-shadow-lg bg-main-gray'>
        <div className='flex items-center mb-8'>
            <div className=' rounded-full w-8 h-8 bg-main-yellow outline outline-2 outline-main-blue mr-2'>{}</div>
            <div className=' opacity-75'>{user.fullname}</div>
        </div>
        <h3 className=' font-bold text-main-blue text-xl md:text-3xl mb-8 '>
            {title}
        </h3>
        <p className=' mb-4'>
            {details}
        </p>
        <div className=' mb-4 '>
            <p><span className=' font-bold'>Topics : </span>{
                topics.map((topic,index)=>(index!=topics.length-1?`${topic}, `:`${topic}`))
            }</p>
        </div>
        <div className=' flex justify-between items-center'>
            <p className=' text-main-blue font-semibold text-xs md:text-base'>
                {date}
            </p>
            <div className='flex space-x-2 justify-center items-start'>
                <button onClick={e=>handleHearing(e,details)} className='hidden md:flex hover:opacity-65 active:opacity-100 duration-300 '>
                    <HeadsetMicIcon style={{fontSize:44}}></HeadsetMicIcon>
                </button>
                <button className='hidden md:flex hover:opacity-65 active:opacity-100 duration-300 '>
                    <QuestionAnswerIcon style={{fontSize:44}}></QuestionAnswerIcon>
                </button>
                <button className='hidden md:flex hover:opacity-65 h-fit  flex-col items-center justify-start active:opacity-100 duration-300  text-red-500 '> 
                    <FavoriteBorderIcon style={{fontSize:44 }} className=''></FavoriteBorderIcon>
                    <p>{likes}</p>
                </button>
                <button onClick={e=>handleHearing(e,details)} className='md:hidden hover:opacity-65 active:opacity-100 duration-300 '>
                    <HeadsetMicIcon style={{fontSize:30}}></HeadsetMicIcon>
                </button>
                <button className='md:hidden hover:opacity-65 active:opacity-100 duration-300 '>
                    <QuestionAnswerIcon style={{fontSize:30}}></QuestionAnswerIcon>
                </button>
                <button className='md:hidden hover:opacity-65 h-fit flex flex-col items-center justify-start active:opacity-100 duration-300  text-red-500 '> 
                    <FavoriteBorderIcon style={{fontSize:30 }} className=''></FavoriteBorderIcon>
                    <p>{likes}</p>
                </button>
            </div>
        </div>


    </div>
  )
}

export default StoryCard