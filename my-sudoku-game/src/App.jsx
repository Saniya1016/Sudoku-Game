import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import Controls from "./Components/Controls";

function App() {
  const [difficulty, setDifficulty] = useState(-1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Increment the key whenever difficulty changes
    setKey(prevKey => prevKey + 1);
  }, [difficulty]);

  return (
    <div className="flex space-y-20 flex-col justify-center items-center h-screen">
      <Controls setDifficulty={setDifficulty} />
      {difficulty > -1 && (
        <Board key={key} difficulty={difficulty} />
      )}
    </div>
  );
}

export default App;