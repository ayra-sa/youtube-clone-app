import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = ({ selectedCategory, setSelectedCategory, setHide }) => {

  const [videos, setVideos] = useState([])
  console.log(videos)

  useEffect(() => {
    // setVideos(null)
    setHide(false)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(data => setVideos(data.items) )
  }, [selectedCategory])

  return (
    <section>
      <div className='w-full lg:w-[calc(100%-15%)] ml-auto mt-[7%] pl-10 pb-10'>
        <h1 className='text-2xl'>{selectedCategory} Videos</h1>

        <Videos videos={videos} />
      </div>
    </section>
  )
}

export default Feed