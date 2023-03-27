import React from 'react'
import { Link } from 'react-router-dom'
import {GrChannel} from 'react-icons/gr'

const SearchVideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className='transition-transform duration-200' title={snippet?.title}>
        <Link to={`/video/${videoId}`} className='flex items-start gap-x-4'>
            <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} className='rounded-2xl bg-neutral-500' />

            <div className='w-5/6 space-y-3 text-neutral-400'>
                <h2 className='font-bold lg:text-xl text-white'>{snippet?.title}</h2>
                <div className='flex items-center gap-x-2' title={`${snippet?.channelTitle} channel`}>
                    <div className='rounded-full w-5 h-5 flex place-content-center items-center text-xs bg-neutral-500'><i><GrChannel /></i></div>
                    <p>{snippet?.channelTitle}</p>
                </div>
                <p>{snippet?.description}</p>
            </div>
        </Link>
    </div>
  )
}

export default SearchVideoCard