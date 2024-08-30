import Board from "./Components/Board";
import Controls from "./Components/Controls";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Controls />
      <Board />
    </div>
  );
}

export default App;
