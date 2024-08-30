import React, { useState } from 'react'

const Cell = ({inputValue}) => {
    const [value, setValue] = useState(inputValue);
    const isEditable = inputValue === '';

    const handleChange = (event) => {
        const newValue = event.target.value;
        if(isEditable && (newValue === '' || newValue >= 1 && newValue <= 9)){
            setValue(newValue);
        }
    }

    return (
        <div className='h-16 w-16 flex bg-gray-200 items-center justify-center'>
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