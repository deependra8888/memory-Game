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

  let [matchingPair, setmatchingPair] = useState([])
  let [moves, setMoves] = useState(0)

  const fillBoard = (r, c) => {
    let newBoard = JSON.parse(JSON.stringify(Board))
    if(matchingPair.length === 2) {
      let x = +matchingPair[0][0]
      let y = +matchingPair[0][1]
      let x1 = +matchingPair[1][0]
      let y1 = +matchingPair[1][1]
      if(correctBoard[x][y] !== correctBoard[x1][y1]){
        newBoard[x][y] = 0;
        newBoard[x1][y1] = 0;
      }
      newBoard[r][c] = correctBoard[r][c];
      setBoard(newBoard)
      setmatchingPair(['' + r + c])
      setMoves(moves + 1)
      return;
    }

    newBoard[r][c] = correctBoard[r][c];
    console.log(newBoard);
    setBoard(newBoard)
    setmatchingPair([...matchingPair, '' + r  + c])
  }



  return (
    <div className="App">
      <h1>Moves : {moves}</h1>
      <main className='wrapper'>
        {
          Board.map((row, r) => {
            return (
              <div className='row' key={r}>
                {row.map((elm, c) => {
                  return <button
                    key={c}
                    onClick={() => fillBoard(r, c)}
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
