import { useEffect, useState } from 'react';
import './style.css';

type Turn = 'X' | 'O';

interface SquareProps {
  onClick: () => void;
  value: Turn | '';
}

const Square = ({ onClick, value }: SquareProps) => {
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState<(Turn | '')[]>(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState<string>('');

  const handleClick = (position: number) => {
    const cpySquares = [...squares];
    if (cpySquares[position] || gameWin(cpySquares)) return;
    cpySquares[position] = isXTurn ? 'X' : 'O';
    setSquares(cpySquares);
    setIsXTurn((prev) => !prev);
  };

  const restart = () => {
    setSquares(Array(9).fill(''));
    setIsXTurn(true);
  };

  const gameWin = (squares: (Turn | '')[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [x, y, z] = winPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  useEffect(() => {
    if (!gameWin(squares) && squares.every((square) => square !== '')) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (gameWin(squares)) {
      setStatus(`Winner is ${gameWin(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className='ttt-contaier'>
      <div className='row'>
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className='row'>
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className='row'>
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h2 className='ttt-status'>{status}</h2>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className='ttt-restart' onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};
export default TicTacToe;
