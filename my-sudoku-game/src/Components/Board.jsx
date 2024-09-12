import React, { useState } from 'react';
import Cell from './Cell';
import generateBoard from '../utils/GenerateBoard';
import Solve from './Solve';

const Board = ({ difficulty }) => {

      
  const [gameState, setGameState] = useState(generateBoard(difficulty));

  return (
    <div>

      <Solve gameState={gameState} setGameState={setGameState}/>

      <div className="grid grid-cols-9 gap-0.5 p-1 bg-gray-300 max-w-fit">
        {gameState['grid'].map((row, i) => 

          row.map((cellValue, j) => (
            <div 
              key={`${i}-${j}`} 
              className={`
                ${j % 3 === 2 && j !== 8 ? 'border-r-2 border-gray-400 pr-1' : ''}
                ${i % 3 === 2 && i !== 8 ? 'border-b-2 border-gray-400 pb-1' : ''}
              `}
            >
              <Cell inputValue={cellValue} gameState={gameState} setGameState={setGameState} row={i} col={j}/>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
