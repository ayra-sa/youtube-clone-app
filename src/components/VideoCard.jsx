import React from 'react'
import { GrChannel } from 'react-icons/gr'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='transition-transform duration-200 hover:scale-105' title={snippet?.title}>
        <Link to={`/video/${videoId}`}>
          {
            <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} className='rounded-2xl w-full bg-neutral-500' /> || <Skeleton />
          }

            <div className='w-5/6 space-y-3 text-neutral-400'>
                <h2 className='font-bold lg:text-xl text-white mt-3'>{snippet?.title.slice(0, 60) || <Skeleton />}</h2>
                <div className='flex items-center gap-x-2' title={`${snippet?.channelTitle} channel`}>
                    <div className='rounded-full w-5 h-5 flex place-content-center items-center text-xs bg-neutral-500'><i><GrChannel /></i></div>
                    <p>{snippet?.channelTitle || <Skeleton />}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default VideoCard