import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'
import handleSpeaking from '../utils/handleSpeaking'
import storyData from '../dummy/StoryData'

const Search = () => {
    
    return (
    <div className=' relative pb-12 '>
        <Navbar ></Navbar>
        <div className='pt-28 flex flex-col space-y-12 items-center justify-center'>
        {storyData.map((story) => (
        <StoryCard
          key={story.id}
          id={story.id}
          user={story.user}
          title={story.title}
          details={story.details}
          topics={story.topics}
          date={story.date}
          likes={story.likes}
        />
      ))}
        </div>
    </div>
  )
}

export default Search