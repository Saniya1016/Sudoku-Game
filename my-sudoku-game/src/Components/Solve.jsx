import React from 'react';
import solve from '../utils/Solver';
import { VscDebugStepOver } from "react-icons/vsc";
import { FaLightbulb } from "react-icons/fa";


const Solve = ({gameState, setGameState}) => {

    const handleOneStep = (flag) => {
        const newState = solve({ ...gameState }, flag);
        setGameState(newState);
    }

  return (
    <div>

        <div className='flex flex-row space-x-10 font-bold'>

          <div>
            <button className='bg-yellow-300 hover:bg-yellow-200 px-4 py-2 rounded-lg flex items-center space-x-2' onClick={() => {handleOneStep(false)}}>
              <span>One Step</span>
              <VscDebugStepOver className='font-bold text-xl'/>
            </button>
          </div>

          <div>
          <button className=' bg-green-500 hover:bg-green-300 px-4 py-2 rounded-lg' onClick={() => {handleOneStep(true)}}>
            <div className='flex flex-row space-x-2'>
              <span> Solution </span>
              <FaLightbulb className='font-bold text-xl'/>
            </div>
            </button>
          </div>


        </div>
      
    </div>
  )
}

export default Solve;
