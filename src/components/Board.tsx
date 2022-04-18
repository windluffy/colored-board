import {FunctionComponent, useEffect, useRef, useState} from "react";
import Tile from "./Tile";
import {swap as matrixSwap} from "../utils/matrix.util";

export type Color = string

export type MatrixTiles = Color[][]

export type BoardProps = {
  initialMatrixTiles?: MatrixTiles
}

type Coordinate = [number, number]

const Board: FunctionComponent<BoardProps> = ({initialMatrixTiles= []}) => {
  const [matrixTiles, setMatrixTitle] = useState<MatrixTiles>(initialMatrixTiles)
  const sourceRef = useRef<Coordinate | null>()
  const targetRef = useRef<Coordinate | null>()

  const handleDragStart = (coordinate: Coordinate) => {
    sourceRef.current = coordinate
  }

  const handleDragEnter = (coordinate: Coordinate) => {
    targetRef.current = coordinate
  }

  const handleDragEnd = () => {
    setMatrixTitle(matrixSwap(matrixTiles, sourceRef.current as Coordinate, targetRef.current as Coordinate))

    sourceRef.current = null
    targetRef.current = null
  }

  useEffect(() => {
    setMatrixTitle(initialMatrixTiles)
  }, [initialMatrixTiles])

  return <div>
    { matrixTiles.map((row, rowIndex) => (
        <div className='row' key={rowIndex}>
          { row.map((tileColor, columnIndex) => (
            <div
              key={columnIndex}
              draggable
              onDragStart={() =>  handleDragStart([rowIndex, columnIndex])}
              onDragEnter={() => handleDragEnter([rowIndex, columnIndex])}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={() => handleDragEnd()}
            >
              <Tile color={tileColor} />
            </div>
          )) }
        </div>
      ))
    }
  </div>
}

export default Board