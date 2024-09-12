import React, { useState, useEffect } from 'react';
import CheckMove from '../utils/CheckMove.js';

const Cell = ({ inputValue, gameState, setGameState, row, col }) => {
    const key = `${row},${col}`;
    const [value, setValue] = useState(inputValue);
    const [isValid, setIsValid] = useState(true);
    const [isEditable] = useState(key in gameState.remove);

    // Synchronize local state with prop (inputValue)**
    useEffect(() => {
        setValue(inputValue);
    }, [inputValue]);

    const handleChange = (event) => {
        const checkVal = event.target.value;
        const newValue = checkVal === '' ? -1 : parseInt(checkVal, 10);

        if (isEditable && (newValue === -1 || (newValue >= 1 && newValue <= 9))) {
            // Remove current value from gameState
            CheckMove.removePrevious(gameState, isValid, parseInt(value, 10), row, col);

            setValue(checkVal); // Update local state

            if (newValue !== -1) {
                if (CheckMove.isValidMove(gameState, newValue, row, col)) {
                    setIsValid(true);
                    setGameState({ ...gameState }); // Update the gameState
                } else {
                    setIsValid(false);
                }
            }
        }
    };

    return (
        <div
            className={`h-16 w-16 flex items-center justify-center 
            border-2 ${isValid ? 'border-gray-300' : 'border-red-500'} ${isEditable? 'bg-gray-200': 'bg-yellow-200'}`}
        >
            <input
                type="number"
                value={value === -1 ? '' : value}
                onChange={handleChange}
                className="w-full h-full text-center bg-transparent outline-none text-xl font-bold"
                min={1}
                max={9}
                disabled={!isEditable}
            />
        </div>
    );
};

export default Cell;
