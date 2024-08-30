import React from 'react';
import Cell from './Cell';

const Board = () => {

  // Create a 9x9 grid filled with empty strings
  const grid = Array(9).fill().map(() => Array(9).fill(''));

  return (
    <div className="grid grid-cols-9 gap-0.5 p-1 bg-gray-300 max-w-fit">
      {grid.map((row, i) => 

        row.map((cellValue, j) => (
          <div 
            key={`${i}-${j}`} 
            className={`
              ${j % 3 === 2 && j !== 8 ? 'border-r-2 border-gray-400 pr-1' : ''}
              ${i % 3 === 2 && i !== 8 ? 'border-b-2 border-gray-400 pb-1' : ''}
            `}
          >
            <Cell inputValue={cellValue} />

          </div>
        ))
      )}
    </div>
  );
};

export default Board;