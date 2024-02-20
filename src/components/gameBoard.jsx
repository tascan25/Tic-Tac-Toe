
function GameBoard({onSelectSquare,board}) {
  
    // const [gameBoard, setgameBoard] = useState(initialGameBoard)
    // function handelSelect(rowindex,colindex){
    //     setgameBoard((prevBoard)=>{
    //         const updatedBoard = [...prevBoard.map(innerArray=>[...innerArray])]
    //         updatedBoard[rowindex][colindex] = ActivePlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }
    return (
        <ol id="game-board">
            {board.map((rows,rowindex)=><li key={rowindex}>
                <ol>
                    {rows.map((playerSymbol,colindex)=><li key={colindex}><button onClick={()=>onSelectSquare(rowindex,colindex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}
export default GameBoard