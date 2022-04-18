import {FunctionComponent} from "react";

export type TileProps = {
  color: string
  width?: number
  height?: number
}

const Tile: FunctionComponent<TileProps> = ({color, width, height}) => {
  return <div className='tile' style={{backgroundColor: color, width, height}}/>
}

export default Tile