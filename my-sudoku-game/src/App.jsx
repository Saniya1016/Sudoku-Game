import React, { useState, useEffect } from "react";
import Board from "./Components/Board";
import Controls from "./Components/Controls";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [difficulty, setDifficulty] = useState(-1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [difficulty]);

  return (
    <div className="flex flex-col justify-between items-center min-h-screen bg-black p-2 sm:p-4 md:p-6 lg:p-8">
      <Header />
      <div className="flex flex-col flex-grow justify-center items-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 w-full max-w-lg">
        <Controls setDifficulty={setDifficulty} />
        {difficulty > -1 && (
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 w-full">
            <Board key={key} difficulty={difficulty} />
            <Footer setKey={setKey}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;