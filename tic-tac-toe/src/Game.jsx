import React, { useEffect, useState } from "react";

function Game() {
  const [cell1, setCell1] = useState('');
  const [cell2, setCell2] = useState('');
  const [cell3, setCell3] = useState('');
  const [cell4, setCell4] = useState('');
  const [cell5, setCell5] = useState('');
  const [cell6, setCell6] = useState('');
  const [cell7, setCell7] = useState('');
  const [cell8, setCell8] = useState('');
  const [cell9, setCell9] = useState('');
  const [turnCount, setTurnCount] = useState(1);
  const [winner, setWinner] = useState(null)

  const handleClick = (cell, setCell) => {

    if (winner || cell != '') return;

    const currentPlayer = turnCount % 2 === 1 ? "X" : "O";
    if (cell === '') {
      setCell(currentPlayer);
      setTurnCount(turnCount + 1);
    }
    
  }

  useEffect(() => {
    const checkWinner = () => {
        const winCombinations = [
            [cell1, cell2, cell3],
            [cell4, cell5, cell6],
            [cell7, cell8, cell9],
            [cell1, cell4, cell7],
            [cell2, cell5, cell8],
            [cell3, cell6, cell9],
            [cell1, cell5, cell9],
            [cell3, cell5, cell7],
        ];

        for (let combination of winCombinations) {
            if (combination[0] && combination[0] === combination[1] && combination[0] === combination[2]) {
                setWinner(combination[0])
                return;
            }
        }
    }
    checkWinner();
  }, [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]);

  const handleReset = () => {
    setCell1('');
    setCell2('');
    setCell3('');
    setCell4('');
    setCell5('');
    setCell6('');
    setCell7('');
    setCell8('');
    setCell9('');
    setTurnCount(1);
    setWinner('')
  }
  
 


  return (
    <>
    <div className="game">
        <div className="game-area">
            <div className="area-row sq-one-three">
            <div className="game-sq sq-one" onClick={() => handleClick(cell1, setCell1)}>{cell1}</div>
            <div className="game-sq sq-two" onClick={() => handleClick(cell2, setCell2)}>{cell2}</div>
            <div className="game-sq sq-three" onClick={() => handleClick(cell3, setCell3)}>{cell3}</div>
            </div>
            <div className="area-row sq-four-six">
            <div className="game-sq sq-four" onClick={() => handleClick(cell4, setCell4)}>{cell4}</div>
            <div className="game-sq sq-five" onClick={() => handleClick(cell5, setCell5)}>{cell5}</div>
            <div className="game-sq sq-six" onClick={() => handleClick(cell6, setCell6)}>{cell6}</div> 
            </div>
            <div className="area-row sq-seven-nine">
            <div className="game-sq sq-seven" onClick={() => handleClick(cell7, setCell7)}>{cell7}</div>
            <div className="game-sq sq-eight" onClick={() => handleClick(cell8, setCell8)}>{cell8}</div>
            <div className="game-sq sq-nine" onClick={() => handleClick(cell9, setCell9)}>{cell9}</div>
            </div>
        </div>
        {winner && <div className="winner-message">{winner} выиграл!</div>}
        <button className="reset" onClick={handleReset}>Заново!</button>
      </div>
    </>
  );
}

export default Game;
