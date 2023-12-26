import React from 'react'
import StoryCardDetailed from './../components/StoryCardDetailed'
import CancelIcon from '@mui/icons-material/Cancel';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

const PopUpComment = ({story,setShowComment}) => {

  const Comment=({comment})=>{
    return(
    <div className=' font-roboto flex-shrink-0 h-10 w-[80%] flex items-center space-x-5'>
            <div className=' h-10 w-10 aspect-square rounded-full bg-yellow outline outline-2 bg-main-yellow outline-main-blue '>
            </div>
            <div className='rounded-xl h-10 px-6 bg-main-blue flex items-center justify-center'>
              <p className=' text-white'>{comment}</p>
            </div>
    </div>
    )
  }

  return (
    <div className=' font-roboto fixed z-50 h-screen w-full bg-black bg-opacity-60 grid place-items-center'>
        <div className=' h-[90vh] w-[90%] md:w-[70%] bg-white pb-4 rounded-2xl flex flex-col justify-between items-center pt-4 '>
          <div className='w-[95%] flex justify-between mb-2'>
            <div className='h-10 w-10'></div>
            <div className=' text-2xl font-extrabold'>
              Comments
            </div>
            <CancelIcon onClick={()=>setShowComment(false)} style={{fontSize:40}} className=' text-main-blue active:text-dark-blue hover:text-light-blue duration-300 cursor-pointer '/>
          </div>
          <div className='py-4 overflow-y-scroll space-y-4 w-full flex flex-col justify-start items-center'>
            <StoryCardDetailed
              key={story.id}
              id={story.id}
              user={story.user}
              title={story.title}
              details={story.details}
              topics={story.topics}
              date={story.date}
              likes={story.likes}
            />
            <Comment comment='hhhhhhhhhhhh' ></Comment>
         
          </div>
          <div className=' w-[80%] pt-4 flex items-center space-x-5'>
            <div className=' h-10 w-10 aspect-square rounded-full bg-yellow outline outline-2 bg-main-yellow outline-main-blue '>
            </div>
            <div className='outline outline-2 flex-1 rounded-xl h-16 outline-main-blue flex items-center justify-between px-4'>
              <button>
                <MicIcon className=' text-main-blue active:text-dark-blue hover:text-light-blue duration-300 cursor-pointer '></MicIcon>
              </button>
              <input className=' flex-1 outline-none ml-4' type="text" />
              <button>
                <SendIcon className=' text-main-blue active:text-dark-blue hover:text-light-blue duration-300 cursor-pointer '></SendIcon>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PopUpComment