import Board from "./Components/Board";
import Controls from "./Components/Controls";

function App() {
  return (
    <div className="flex space-y-20 flex-col justify-center items-center h-screen">
      <Controls />
      <Board />
    </div>
  );
}

export default App;
