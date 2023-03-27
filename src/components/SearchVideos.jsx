import React from 'react'
import SearchVideoCard from './SearchVideoCard'

const SearchVideos = ({videos}) => {
    console.log(videos)
  return (
    <div className='mt-10 pr-5 w-full space-y-4'>
        {videos.map((video, index) => (
            <SearchVideoCard key={index} video={video} />
        ))}
    </div>
  )
}

export default SearchVideos