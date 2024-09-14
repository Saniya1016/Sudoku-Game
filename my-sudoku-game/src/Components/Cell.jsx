import React, { useState, useEffect } from 'react';
import CheckMove from '../utils/CheckMove.js';

const Cell = ({ inputValue, gameState, setGameState, row, col }) => {
    const key = `${row},${col}`;
    const [value, setValue] = useState(inputValue);
    const [isValid, setIsValid] = useState(true);
    const [isEditable] = useState(key in gameState.remove);

    useEffect(() => {
        setValue(inputValue);
    }, [inputValue]);

    const handleChange = (event) => {
        const checkVal = event.target.value;
        const newValue = checkVal === '' ? -1 : parseInt(checkVal, 10);

        if (isEditable && (newValue === -1 || (newValue >= 1 && newValue <= 9))) {
            CheckMove.removePrevious(gameState, isValid, parseInt(value, 10), row, col);

            const updatedGameState = { ...gameState };
            if (newValue !== -1) {
                if (CheckMove.isValidMove(updatedGameState, newValue, row, col)) {
                    setIsValid(true);
                    setGameState(updatedGameState);
                } else {
                    setIsValid(false);
                }
            } else {
                setIsValid(true);
            }

            setValue(checkVal);
        }
    };

    return (
        <div
            className={`flex items-center justify-center 
            ${isValid ? 'border border-gray-300' : 'border-2 border-red-500'} 
            ${isEditable ? 'bg-gray-200' : 'bg-yellow-200'} 
            w-full pb-[100%] relative`}
        >
            <input
                type="number"
                value={value === -1 ? '' : value}
                onChange={handleChange}
                className="absolute inset-0 w-full h-full text-center bg-transparent outline-none text-xs sm:text-sm md:text-base lg:text-lg font-bold"
                min={1}
                max={9}
                disabled={!isEditable}
            />
        </div>
    );
};

export default Cell;