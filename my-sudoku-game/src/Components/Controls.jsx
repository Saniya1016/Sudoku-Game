import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const Controls = ({setDifficulty}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('Select Difficulty');
  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleClick = (difficulty) => {

    setIsOpen(false);
    setSelectedDifficulty(difficulty);

    switch (difficulty) {
      case 'Easy':
        setDifficulty(30);
        break;
      case 'Medium':
        setDifficulty(50);
        break;
      case 'Hard':
        setDifficulty(70);
        break;
      default:
        setDifficulty(-1);
    }
  }

  return (
    <div className="relative inline-block text-left">

      <div className='flex flex-row items-center'>
        <button 
          className='flex justify-center items-center w-full px-4 py-2 bg-blue-500 rounded-md text-center font-bold text-white text-xl hover:bg-blue-600'
          onClick={() => setIsOpen(!isOpen)}> 
              {selectedDifficulty} 
            <FaChevronDown className="ml-2 mt-1" />
          </button>
      </div>

      {
        isOpen && (

          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">

            <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby="options-menu">

              {
                difficulties.map((difficulty) => (
                  <button key={difficulty} role='menuitem' className='block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900' onClick={() => {handleClick(difficulty)}}>
                    {difficulty}
                  </button>
                ))
              }

            </div>

          </div>
        )
      }

  </div>
  )
}

export default Controls
