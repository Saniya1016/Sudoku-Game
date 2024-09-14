import React from 'react';
import solve from '../utils/Solver';


const Solve = ({gameState, setGameState}) => {

    const handleOneStep = (flag) => {
        const newState = solve({ ...gameState }, flag);
        setGameState(newState);
    }

  return (
    <div>

        <div className='flex flex-row space-x-10 font-bold'>
            <button className=' bg-yellow-300 hover:bg-yellow-200 px-4 py-2 rounded-lg' onClick={() => {handleOneStep(false)}}> Reveal One Step </button>
            <button className=' bg-green-500 hover:bg-green-300 px-4 py-2 rounded-lg' onClick={() => {handleOneStep(true)}}> See Solution </button>
        </div>
      
    </div>
  )
}

export default Solve;
