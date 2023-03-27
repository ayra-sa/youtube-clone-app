import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../utils/constant'

const Sidebar = ({ selectedCategory, setSelectedCategory, hide }) => {


  return (
    <div className={`lg:fixed bottom-0 top-[13%] overflow-y-auto mt-[20%] lg:mt-0 lg:flex-col items-center lg:items-start px-5 gap-y-5 w-full lg:w-1/6 pb-10 scrollbar-hide ${!hide ? 'flex' : 'hidden'}`}>
        {categories.map((category, index) => (
            <button 
              key={index} 
              onClick={() => setSelectedCategory(category.name) } 
              className={`rounded-xl transition-all w-full hover:bg-neutral-500 whitespace-nowrap ${selectedCategory === category.name && 'bg-neutral-600 font-bold'}`}
            >
              <Link to='/' className='px-4 py-2 flex items-center gap-x-4'>
                <i>{category.icon}</i>
                <span>{category.name}</span>
              </Link>
            </button>
        ))}
    </div>
  )
}

export default Sidebar