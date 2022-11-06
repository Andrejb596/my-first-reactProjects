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

  // function to compare sudoku's
  function compareSudoku(currentSudoku, solvedSudoku) {
    let res = {
      isConplete: true,
      isSolvable: true
    }
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (currentSudoku[i][j] != solvedSudoku[i][j]) {
          if (currentSudoku[i][j] != -1) {
            res.isSolvable = false;
          }
          res.isConplete = false;
        }
      }
    }
    return res;
  }

  // function to check sudoku is valid or not
  function checkSudoku() {
    let sudoku = getDeepCopy(initial);
    solver(sudoku);
    let compare = compareSudoku(sudokuArr, sudoku);
    if (compare.isConplete) {
      alert('Congratulations! You have solved Sudoku!');
    } else if (compare.isSolvable) {
      alert('Keep going!');
    } else {
      alert("Sudoku can't be solved. Try again!");
    }
  }

  function checkRow(grid, row, num) {
    return grid[row].indexOf(num) === -1;
  }

  // check num is unique in column
  function checkColumn(grid, column, num) {
    return grid.map(row => row[column]).indexOf(num) === -1;
  }

  // check num is unique in box
  function checkBox(grid, row, column, num) {
    // get box start index 
    let boxArr = [],
      rowStart = row - (row % 3),
      colStart = column - (column % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // get all the cell in the numbers and push to boxArr
        boxArr.push(grid[rowStart + i][colStart + j])
      }
    }
    return boxArr.indexOf(num) === -1;
  }

  function checkValid(grid, row, column, num) {
    // num should be unique in row, column and in the square 3x3
    if (checkRow(grid, row, num) && checkColumn(grid, column, num) && checkBox(grid, row, column, num)) {
      return true;
    }
    return false;
  }

  function getNext(row, column) {
    // if column reaches 8, increase row number
    // if row reaces 8 and column reaches 8, next will be [0, 0]
    // if column doesn`t reach 8, increase column number
    return column !== 8 ? [row, column + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
  }

  // recursive function to solver sudoku
  function solver(grid, row = 0, column = 0) {
    // if the current cell is already filled, move to next cell
    if (grid[row][column] !== -1) {
      // for last cell, dont solve it
      let isLast = row >= 8 && column >= 8;
      if (!isLast) {
        let [newRow, newColumn] = getNext(row, column);
        return solver(grid, newRow, newColumn);
      }
    }
    for (let num = 1; num <= 9; num++) {
      // check if this num is satisfying sudoku constraints 
      if (checkValid(grid, row, column, num)) {
        // fill the num in that cell
        grid[row][column] = num;
        // get Next cell and repeat the function 
        let [newRow, newColumn] = getNext(row, column);
        if (!newRow && !newColumn) {
          return true;
        }
        if (solver(grid, newRow, newColumn)) {
          return true;
        }
      }
    }
    // if its is in valid fill with -1
    grid[row][column] = -1;
    return false;
  }

  // function to slove sudoku by navigation to each cell 
  function sloveSudoku() {
    let sudoku = getDeepCopy(initial);
    solver(sudoku);
    setSudokuArr(sudoku);
  }

  // function to rest sudoku
  function resetSudoku() {
    let sudoku = getDeepCopy(initial);
    setSudokuArr(sudoku);
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
          <button className='checkButton button' onClick={checkSudoku}>Перевірити</button>
          <button className='solveButton button' onClick={sloveSudoku}>Виконати</button>
          <button className='resetButton button' onClick={resetSudoku}>Перезавантажити</button>
        </div>
      </div>
    </div>
  )
}
