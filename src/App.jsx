import { useState } from "react"
import Players from "./components/player"
import GameBoard from "./components/gameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/gameOver"
let winner;
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function derivedActivePlayer(gameTurns) {
  let ActivePlayer = "X"
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    ActivePlayer = "O"
  }
  return ActivePlayer
}

function App() {//react treats every instance as an isolated instance, so that state of one component changed does not effect the state of the other instance

  const [gameTurns, setgameTurns] = useState([])
  // const [ActivePlayer, setActivePlayer] = useState("X")
  const activePlayer = derivedActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map((array)=>{return [...array]})]// this is variable or state, which is getting derivied from the help of the gameTurns state in the app component, hence this concept is know as derived state concept 
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }


  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const SecondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol===SecondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner = firstSquareSymbol
    }
  }
  
  const hasdraw = gameTurns.length===9 && !winner

  function handelPlayer(rowIndex, colIndex) {
    // setActivePlayer((currActiveplyr) => currActiveplyr === "X" ? "O" : "X")

    setgameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns)

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns
    })
  }

  function handelRestart(){
    setgameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players initialName="Player 1" symbol="X" isActive={activePlayer === "X"}></Players>
          <Players initialName="Player 2" symbol="O" isActive={activePlayer === "O"}></Players>
        </ol>
        {(winner||hasdraw)&&<GameOver winner={winner} onRestart={handelRestart}/>}
        <GameBoard onSelectSquare={handelPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}
export default App
