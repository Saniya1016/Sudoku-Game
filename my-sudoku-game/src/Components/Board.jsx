import React, { useState } from 'react';
import Cell from './Cell';
import generateBoard from '../utils/GenerateBoard';
import Solve from './Solve';

const Board = ({ difficulty }) => {
    const [gameState, setGameState] = useState(generateBoard(difficulty));
    const { grid } = gameState;

    return (
        <div className='flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 w-full'>
            <Solve gameState={gameState} setGameState={setGameState} />
            <div className="grid grid-cols-9 gap-0.5 p-1 bg-gray-300 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]">
                {grid.map((row, i) =>
                    row.map((cellValue, j) => (
                        <div
                            key={`${i}-${j}`}
                            className={`${
                                j % 3 === 2 && j !== 8 ? 'border-r-2 border-gray-400' : ''
                            } ${
                                i % 3 === 2 && i !== 8 ? 'border-b-2 border-gray-400' : ''
                            }`}
                        >
                            <Cell
                                inputValue={cellValue}
                                gameState={gameState}
                                setGameState={setGameState}
                                row={i}
                                col={j}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Board;