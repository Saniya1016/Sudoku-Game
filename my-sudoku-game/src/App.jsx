import React, {useState} from "react";
import Board from "./Components/Board";
import Controls from "./Components/Controls";

function App() {
  const [difficulty, setDifficulty] = useState(-1);
  return (
    <div className="flex space-y-20 flex-col justify-center items-center h-screen">
      <Controls setDifficulty={setDifficulty}/>
      <Board />
    </div>
  );
}

export default App;
