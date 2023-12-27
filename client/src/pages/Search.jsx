import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'
import handleSpeaking from '../utils/handleSpeaking'
import axios from 'axios'

const Search = () => {
  const[storyData,setStoryData]=useState([])
  const fetchData = async() => {
      axios.get(`http://localhost:8000/stories`,{
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // Handle the response data
        console.log('Data:', response.data);

        setStoryData(
          response.data.articles.map((s)=>({
            id: s.id,
            user: s.author_id,
            title: s.title,
            details: s.content,
            topics: s.categories,
            date: s.creation_date.split(8),
            likes: s.likes,
          }))
        )
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error.message);
      });
    };
    useEffect(()=>{
      fetchData()
    },[])

    return (
    <div className=' relative pb-12 '>
        <Navbar ></Navbar>
        <div className='pt-28 flex flex-col space-y-12 items-center justify-center'>
        {storyData.map((story) => (
        <StoryCard
          storyData={storyData}
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