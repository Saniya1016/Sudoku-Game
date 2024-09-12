import React from 'react';
import solve from '../utils/Solver';


const Solve = ({gameState, setGameState}) => {

    const handleOneStep = () => {
        const newState = solve({ ...gameState }, false);
        setGameState(newState);
    }

  return (
    <div>

        <div className='flex flex-row space-x-10'>
            <button className='text-white bg-yellow-300 hover:bg-yellow-200 px-4 py-2 rounded-lg' onClick={handleOneStep}> Reveal One Step </button>
            <button className='text-white bg-green-500 hover:bg-green-300 px-4 py-2 rounded-lg'> See Solution </button>
        </div>
      
    </div>
  )
}

export default Solve;
