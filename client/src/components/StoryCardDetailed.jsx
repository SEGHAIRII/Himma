import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import handleHearing from '../utils/handleHearing';

const StoryCardDetailed = ({title,user,details,topics,date,likes,setShowComment}) => {

    
  return (
    <div className='font-rubik flex-shrink-0 flex flex-col w-[90%] md:w-[80%] pt-6 pb-2 px-8 rounded-lg shadow-lg bg-main-gray bg-opacity-50'>
        <div className='flex items-center mb-4'>
            <div className=' rounded-full w-8 h-8 bg-main-yellow outline outline-2 outline-main-blue mr-2'>{}</div>
            <div className=' opacity-75'>{user.fullname}</div>
        </div>
        <h3 className=' font-bold text-main-blue text-xl md:text-2xl mb-4'>
            {title}
        </h3>
        <p className=' mb-2 text-sm'>
            {details}
        </p>
        <div className=' mb-2'>
            <p><span className=' font-bold'>Topics : </span>{
                topics.map((topic,index)=>(index!=topics.length-1?`${topic}, `:`${topic}`))
            }</p>
        </div>
        <div className=' flex justify-between items-center'>
            <p className=' text-main-blue font-semibold text-xs md:text-base'>
                {date}
            </p>
            <div className='flex space-x-6 justify-center items-start'>
                <button onClick={e=>handleHearing(e,details)} className='hidden md:flex hover:opacity-65 active:opacity-100 duration-300 '>
                    <HeadsetMicIcon style={{fontSize:40}}></HeadsetMicIcon>
                </button>
                <button onClick={()=>setShowComment(true)} className='hidden md:flex hover:opacity-65 active:opacity-100 duration-300 '>
                    <QuestionAnswerIcon style={{fontSize:40}}></QuestionAnswerIcon>
                </button>
                <button className='hidden md:flex hover:opacity-65 h-fit  flex-col items-center justify-start active:opacity-100 duration-300  text-red-500 '> 
                    <FavoriteBorderIcon style={{fontSize:40}} className=''></FavoriteBorderIcon>
                    <p>{likes}</p>
                </button>
                <button onClick={e=>handleHearing(e,details)} className='md:hidden hover:opacity-65 active:opacity-100 duration-300 '>
                    <HeadsetMicIcon style={{fontSize:30}}></HeadsetMicIcon>
                </button>
                <button onClick={()=>setShowComment(true)} className='md:hidden hover:opacity-65 active:opacity-100 duration-300 '>
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

export default StoryCardDetailed