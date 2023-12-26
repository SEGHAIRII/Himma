import React from 'react'
import StoryCardDetailed from './../components/StoryCardDetailed'
import CancelIcon from '@mui/icons-material/Cancel';
const PopUpComment = ({story,setShowComment}) => {

  const Comment=(comment)=>{
    <div className=' flex-shrink-0 w-[80%] flex items-center space-x-5'>
            <div className=' h-10 w-10 aspect-square rounded-full bg-yellow outline outline-2 bg-main-yellow outline-main-blue '>
            </div>
            <div className='rounded-xl h-10 bg-main-blue flex items-center justify-center'>
              <p className=' text-white'>{comment}</p>
            </div>
    </div>
  }

  return (
    <div className=' fixed z-50 h-screen w-full bg-black bg-opacity-60 grid place-items-center'>
        <div className=' h-[90%] w-[90%] md:w-[70%] bg-white pb-4 rounded-2xl flex flex-col justify-between items-center pt-4 '>
          <div className='w-[95%] flex justify-end mb-2'>
            <CancelIcon onClick={()=>setShowComment(false)} style={{fontSize:40}} className=' text-main-blue active:text-dark-blue hover:text-light-blue duration-300 cursor-pointer '/>
          </div>
          <div className=' overflow-y-scroll w-full flex flex-col items-center'>
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
            <Comment content='hhhhhhhhhhhh' ></Comment>
          </div>
          <div className=' w-[80%] h-20 flex items-center space-x-5'>
            <div className=' h-10 w-10 aspect-square rounded-full bg-yellow outline outline-2 bg-main-yellow outline-main-blue '>
            </div>
            <div className='outline outline-2 flex-1 rounded-xl h-20 outline-main-blue flex flex-col'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default PopUpComment