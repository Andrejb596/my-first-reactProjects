import './scss/game.scss';
import { useState } from 'react';
import { calculateWinner } from '../utils/helper';
import Board from "./Board";

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board];
        // перевіряю чи був натиск по клітинці, або гра завершена
        if (winner || boardCopy[index]) return;
        // визначити чій хід 
        boardCopy[index] = xIsNext ? 'X' : 'O';
        // обновити стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    const startNewGame = () => {
        return (
            <button className="startBtn" onClick={() => setBoard(Array(9).fill(null))}>Очистити поле</button>
        )
    }
    return (
        <div className='gameContainer'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p>
                {winner ? 'Переможець ' + winner : 'Зараз ходе ' + (xIsNext ? 'X' : '0')}
            </p>
        </div>
    )
}
