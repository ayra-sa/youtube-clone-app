import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import SearchFeed from './components/SearchFeed'
import Sidebar from './components/Sidebar'
import VideoDetail from './components/VideoDetail'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [hide, setHide] = useState(false)
  
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} hide={hide} />
      <Routes>
        <Route path='/' exact element={<Feed selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setHide={setHide} />} />
        <Route path='/video/:id' element={<VideoDetail setHide={setHide} />} />
        <Route path='/search/:searchTerm' element={<SearchFeed setSelectedCategory={setSelectedCategory} setHide={setHide} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
