import React, {useState} from 'react';
import './App.css';
import Board from "./components/Board";
import {generate} from "./utils/matrix.util";
import randomColor from "randomcolor";

function App() {
  const [matrixTiles, setMatrixTile] = useState(
    () => generate([8, 8], () => randomColor())
  )

  return (
    <div className="App">
      <div style={{margin: "auto"}}>
        <Board initialMatrixTiles={matrixTiles} />
      </div>
    </div>
  );
}

export default App;
