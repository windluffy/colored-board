import {FunctionComponent} from "react";
import Tile from "./Tile";

const Board: FunctionComponent = () => {
  const swap = () => {
    // TODO
  }


  return <div>
    <div className='row'>
      <Tile color={'yellow'}/>
      <Tile color={'red'}/>
      <Tile color={'red'}/>
    </div>
    <div className='row'>
      <Tile color={'red'}/>
      <Tile color={'#1c1c1c'}/>
      <Tile color={'red'}/>
    </div>
  </div>
}

export default Board