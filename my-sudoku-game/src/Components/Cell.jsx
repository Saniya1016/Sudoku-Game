import React, { useState } from 'react'
import CheckMove from '../utils/CheckMove.js';


const Cell = ({inputValue, gameState, row, col, setGameState}) => {

    const [value, setValue] = useState(inputValue);
    const [isValid, setIsValid] = useState(true);
    const isEditable = inputValue === '';


    const handleChange = (event) => {

        const newValue = event.target.value;
        if(isEditable && (newValue === '' || newValue >= 1 && newValue <= 9)){

            //make sure to remove current value  from gameState
            CheckMove.removePrevious(gameState, isValid, parseInt(value), row, col);

            setValue(newValue);

            if(newValue !== ''){

                if(CheckMove.isValidMove(gameState, parseInt(newValue), row, col)){
                    setGameState(gameState);
                    console.log(gameState);
                    setIsValid(true);
                    
                } else{
                    setIsValid(false);
                }
            }
        }

    }

    return (
        <div className={`h-16 w-16 flex items-center justify-center bg-gray-200 
            border-2 ${isValid ? 'border-gray-300' : 'border-red-500'}`}>
            <input 
                type='number' 
                value={value}
                onChange={handleChange}
                className='w-full h-full text-center bg-transparent outline-none text-xl font-bold' 
                min={1} 
                max={9}
                disabled={!isEditable}
            />
        </div>
    )
}

export default Cell