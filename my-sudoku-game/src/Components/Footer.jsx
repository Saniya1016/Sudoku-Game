import React from 'react';
import { FaRedo } from 'react-icons/fa';

const Footer = ({ setKey }) => {
    const handleReset = () => {
        setKey(prevKey => prevKey + 1); // Refresh the board
    }

    return (
        <div className="flex justify-center items-center py-4">
            <button 
                className='bg-green-500 hover:bg-green-300 px-4 py-2 rounded-lg flex items-center space-x-2 text-white font-bold'
                onClick={handleReset}
            >
                <FaRedo />
                <span>Reset Game</span>
            </button>
        </div>
    );
}

export default Footer;
