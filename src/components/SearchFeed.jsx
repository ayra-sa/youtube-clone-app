import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import SearchVideos from './SearchVideos'

const SearchFeed = ({setSelectedCategory ,setHide}) => {
  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams()

  useEffect(() => {
    setHide(false)
    setSelectedCategory('')
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data => setVideos(data.items))
  }, [searchTerm])

  return (
    <section>
      <div className='w-[calc(100%-15%)] ml-auto mt-[7%] pl-10 pb-10'>
        <h1 className='text-2xl'>Search for <span className='text-red-500'>{searchTerm}</span> videos</h1>

        <SearchVideos videos={videos} />
      </div>
    </section>
  )
}

export default SearchFeed