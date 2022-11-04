import React, { useState } from 'react'
import './SCSS/page_9.scss'

const initial = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, 1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1]
]

export default function Page_9() {
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function onInputChange(e, row, column) {
    const val = parseInt(e.target.value) || -1, grid = getDeepCopy(sudokuArr);
    // Input value should range from 1-9 and for empty  cell it should be -1
    if (val === -1 || val >= 1 && val <= 9) {
      grid[row][column] = val;
    }
    grid[row][column] = val;
    setSudokuArr(grid);
  }
  return (
    <div className='page9'>
      <div className="page9__header">
        <h3>Sydoku</h3>
        <table>
          <tbody>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                return (
                  <tr key={rIndex} className={(row + 1) % 3 === 0 ? 'rowBorder' : ''}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((column, cIndex) => {
                      return (
                        <td key={rIndex + cIndex} className={(column + 1) % 3 === 0 ? 'columnBorder' : ''}>
                          <input onChange={(e) => onInputChange(e, row, column)}
                            value={sudokuArr[row][column] === -1 ? '' : sudokuArr[row][column]}
                            className='cellInput'
                            disabled={initial[row][column] !== -1}
                          />
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="buttonContainer">
          <button className='checkButton button'>Check</button>
          <button className='solveButton button'>Solve</button>
          <button className='resetButton button'>Solve</button>
        </div>
      </div>
    </div>
  )
}
