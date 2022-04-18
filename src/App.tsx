import React from 'react';
import './App.css';
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <div style={{margin: "auto"}}>
        <Board initialMatrixTiles={[
          ['red', 'red'],
          ['yellow', 'cyan']
        ]} />
      </div>
    </div>
  );
}

export default App;
