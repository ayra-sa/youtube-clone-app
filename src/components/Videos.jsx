import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos}) => {

  if (!videos?.length) return 'Loading...'
  
  return (
    <div className='md:grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-x-4 gap-y-10 mt-10 pr-5 w-full space-y-8 md:space-y-0'>
        {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
        ))}
    </div>
  )
}

export default Videos