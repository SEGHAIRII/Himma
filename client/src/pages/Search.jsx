import React from 'react'
import Navbar from '../components/Navbar'
import StoryCard from '../components/StoryCard'

const Search = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className=' flex flex-col items-center justify-center'>
            <StoryCard user={{fullname:'Amor MOHAMED'}} title='The application of artificial intelligence in clinical diagnosis' 
            details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
            topics={['artificial intelligence','Sports']}
            date='September 2023'
            likes={24}
            ></StoryCard>
        </div>
    </div>
  )
}

export default Search