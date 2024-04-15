import React from 'react'
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className='bg-gray-100 w-[30rem] h-10 flex px-4 rounded-full items-center gap-2'>
        <IoMdSearch className='text-gray-4 text-xl' />
        <input type='text' className='bg-transparent flex-1 border-0 outline-none' placeholder='Search...' />
    </div>
  )
}

export default Search