import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import Controls from "./Components/Controls";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [difficulty, setDifficulty] = useState(-1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Increment the key whenever difficulty changes
    setKey(prevKey => prevKey + 1);
  }, [difficulty]);

  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-black p-8">
      <Header />
      <div className="flex flex-col flex-grow justify-center items-center space-y-8">
        <Controls setDifficulty={setDifficulty} />
        {difficulty > -1 && (
          <div className="flex flex-col items-center space-y-11">
            <Board key={key} difficulty={difficulty} />
            <Footer setKey={setKey}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
