import React from 'react'
import { GrPowerReset } from "react-icons/gr";

const Footer = ({setKey}) => {
    const handleClick = () => {
        setKey(prevKey => prevKey+1);
    }
  return (
    <div>
      <button className='bg-purple-400 rounded-xl font-bold px-4 py-2 hover:bg-purple-300' onClick={handleClick}> 
        <div className='flex flex-row space-x-2'>
            <span>Reset</span>
            <GrPowerReset className='font-extrabold text-xl'/>
        </div>
    </button>
        
    </div>
  )
}

export default Footer
