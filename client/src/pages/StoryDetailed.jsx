import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import storyData from '../dummy/StoryData'
import StoryCardDetailed from '../components/StoryCardDetailed'
import RecomendedCard from '../components/RecomendedCard'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import PopUpComment from '../components/PopUpComment'

const StoryDetailed = () => {
    const {id}=useParams()
    const [showComment,setShowComment]=useState(false)
    console.log(id)
    const findStoryById = (id) => {
        return storyData.find((story) => story.id=== id);
      };
    const story=findStoryById(id)
    
  return (
    <div className='relative font-roboto  pb-12 flex flex-col items-center '>
        {
            showComment&&
            <PopUpComment story={story} setShowComment={setShowComment}/>
        }
        <Navbar></Navbar>
        <div className='pt-28 mb-12 flex flex-col space-y-12 items-center justify-center'>
        <Link to='..' className='w-[80%]'>
            <ArrowCircleLeftIcon style={{fontSize:44}} className=' text-main-blue active:text-dark-blue hover:text-light-blue duration-300 cursor-pointer '/>
        </Link>
        <StoryCardDetailed
            setShowComment={setShowComment}
          key={story.id}
          id={story.id}
          user={story.user}
          title={story.title}
          details={story.details}
          topics={story.topics}
          date={story.date}
          likes={story.likes}
        />
        </div>

        <div className='h-1 mb-12 w-[80%] bg-main-blue' ></div>
        <div className='px-12 w-full capitalize mb-8 text-3xl font-extrabold'>
            <h3>you might also like</h3>
        </div>
        <div className=' space-x-4 px-12 flex items-center pb-4 w-full overflow-x-auto'>
            {
                storyData.map((element)=>(
                    <RecomendedCard user={element.user} title={element.title} id={element.id}></RecomendedCard>
                ))
            }
        </div>
    </div>
  )
}

export default StoryDetailed