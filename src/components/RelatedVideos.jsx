import React from 'react'
import RelatedVideoCard from './RelatedVideoCard'

const RelatedVideos = ({videos}) => {

  if (!videos?.length) return 'Loading...'

  return (
    <div className="w-full lg:w-[35%] mt-24 lg:mt-0 space-y-3">
        {videos.map((video, index) => (
            <RelatedVideoCard key={index} video={video} />
        ))}
    </div>
  )
}

export default RelatedVideos