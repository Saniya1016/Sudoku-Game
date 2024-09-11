import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Controls = ({setDifficulty}) => {
  return (
    <div className='flex flex-row items-center'>
      <button className='flex justify-center w-full px-4 py-2 bg-blue-500 rounded-md text-center text-bold text-white text-xl hover:bg-blue-600'> Difficulty Level 
      <FaChevronDown className="ml-2 mt-1" />
      </button>
    </div>
  )
}

export default Controls
