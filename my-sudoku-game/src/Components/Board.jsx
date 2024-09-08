import React, {useState} from 'react';
import Cell from './Cell';
import generateBoard from '../utils/makeBoard';

const Board = () => {

  const initGameState = generateBoard(30);
  const [gameState, setGameState] = useState(initGameState);

  return (
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
            <Cell inputValue={cellValue} gameState={gameState} row={i} col={j} setGameState={setGameState}/>

          </div>
        ))
      )}
    </div>
  );
};

export default Board;