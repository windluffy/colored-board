import React, {useEffect, useState} from 'react';
import './App.css';
import Board, {MatrixTiles} from "./components/Board";
import {generate} from "./utils/matrix.util";
import randomColor from "randomcolor";

function App() {
  const [matrixTiles, setMatrixTile] = useState<MatrixTiles>([])

  const randomizeColoredBoard = () => {
    setMatrixTile(generate([8, 8], () => randomColor()))
  }

  useEffect(() => {
    randomizeColoredBoard()
  }, [])

  return (
    <div className="App">
      <div style={{margin: "auto"}}>
        <Board initialMatrixTiles={matrixTiles} />
        <button onClick={() => randomizeColoredBoard()}>Randomize</button>
      </div>
    </div>
  );
}

export default App;
