import React from 'react'
import { GrChannel } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RelatedVideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(snippet)
  return (
    <div title={snippet?.title}>
        <Link to={`/video/${videoId}`} onClick={() => window.location.href=`/video/${videoId}`} className='flex items-start w-full gap-x-3'>
            <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} className='rounded-2xl w-1/2 bg-neutral-500' />

            <div className='w-1/2 space-y-3 text-neutral-400'>
                <h2 className='font-bold text-base text-white'>{snippet?.title.slice(0, 60) || <Skeleton />}</h2>
                <div className='flex items-center gap-x-2' title={`${snippet?.channelTitle} channel`}>
                    <div className='rounded-full w-5 h-5 flex place-content-center items-center text-xs bg-neutral-500'><i><GrChannel /></i></div>
                    <p>{snippet?.channelTitle}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default RelatedVideoCard