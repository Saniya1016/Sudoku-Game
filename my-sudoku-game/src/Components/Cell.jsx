import React, { useState } from 'react'

const Cell = ({inputValue, gameState, row, col, checkValid}) => {
    const [value, setValue] = useState(inputValue);
    const [isValid, setIsValid] = useState(true);
    const isEditable = inputValue === '';

    const handleChange = (event) => {

        const newValue = event.target.value;
        if(isEditable && (newValue === '' || newValue >= 1 && newValue <= 9)){
            setValue(newValue);
            if(newValue !== ''){
                setIsValid(checkValid(gameState, parseInt(newValue), row, col));
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