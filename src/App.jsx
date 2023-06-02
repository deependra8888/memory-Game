import { useEffect, useState } from 'react'

import './App.css'


const correctBoard = [
  [1, 8, 2, 7],
  [2, 3, 6, 8],
  [7, 1, 3, 4],
  [5, 4, 6, 5],
]

function App() {
  
  const [Board, setBoard] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
  let [row, setRow] = useState([]);
  let [col, setCol] = useState([]);

  const getRowAndCol = (r, c) => {
    setCol([...col, c]);
    setRow([...row, r])
  }

  useEffect(() => {
    if(row.length === 2){
     let id  = setTimeout(() => {
        let r1 = row[0];
        let c1 = col[0];
        let r2 = row[1];
        let c2 = col[1];
        let newBoard = JSON.parse(JSON.stringify(Board));
        if(correctBoard[r1][c1] !== correctBoard[r2][c2]){
          newBoard[r1][c1] = 0;
          newBoard[r2][c2] = 0;
          setBoard(newBoard)
        }
      }, 500)

      return () => {
        return clearInterval(id)
      }
    }
    if(row.length === 3){
      let newRow = [row[2]];
      let newCol = [col[2]];
      setCol(newCol);
      setRow(newRow)
    }
  },[row, col])

  // console.log('row', row);
  // console.log('col', col);
  return (
    <div className="App">
     
      <main className='wrapper'>
        {
          Board.map((row, r) => {
            return (
              <div className='row' key={r}>
                {row.map((elm, c) => {
                  return <button
                    key={c}
                    onClick={() => {
                      getRowAndCol(r, c)
                      let newBoard = JSON.parse(JSON.stringify(Board))
                      newBoard[r][c] = correctBoard[r][c]
                      setBoard(newBoard)
                    }}
                    style={{
                      background: 'red',
                    }}>{elm}</button>
                })}
              </div>
            )
          })
        }
      </main>
    </div>
  )
}

export default App
