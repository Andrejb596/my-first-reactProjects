import './scss/board.scss';
import Square from "./Square";

export default function Board({ squares, click }) {
  return (
    <div className='boardContainer'>
      {
        squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => click(i)} />
        ))
      }
    </div>
  )
}
