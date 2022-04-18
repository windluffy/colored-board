import {FunctionComponent, useState} from "react";
import Tile from "./Tile";

export type Color = string

export type MatrixTiles = Color[][]

export type BoardProps = {
  initialMatrixTiles?: MatrixTiles
}

const Board: FunctionComponent<BoardProps> = ({initialMatrixTiles= []}) => {
  const [matrixTiles, setMatrixTitle] = useState<MatrixTiles>(initialMatrixTiles)

  const swap = () => {
    // TODO
  }


  return <div>
    { matrixTiles.map((row, rowIndex) => (
        <div className='row' key={rowIndex}>
          { row.map((tileColor, columnIndex) => <Tile color={tileColor} key={columnIndex} />) }
        </div>
      ))
    }
  </div>
}

export default Board