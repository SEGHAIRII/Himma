import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'
import handleSpeaking from '../utils/handleSpeaking'
import storyData from '../dummy/StoryData'
import axios from 'axios'

const Search = () => {

    useEffect(()=>{
      const fetchData = async() => {
        axios.get(`http://localhost:8000/stories`)
          .then(response => {
            // Handle the response data
            console.log('Data:', response.data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error.message);
          });
      };
      fetchData()
    },[])

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