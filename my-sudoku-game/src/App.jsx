import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import Controls from "./Components/Controls";
import generateBoard from "./utils/makeBoard";

function App() {
  const [difficulty, setDifficulty] = useState(-1);
  const [key, setKey] = useState(0);
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    if (difficulty > -1) {
      const newGameState = generateBoard(difficulty); // Generate new board on difficulty change
      setGameState(newGameState);
      setKey(prevKey => prevKey + 1); // Trigger re-render of Board component
    }
  }, [difficulty]);

  return (
    <div className="flex space-y-20 flex-col justify-center items-center h-screen">
      <Controls setDifficulty={setDifficulty} gameState={gameState} />
      {gameState && (
        <Board key={key} gameState={gameState} setGameState={setGameState} />
      )}
    </div>
  );
}

export default App;
