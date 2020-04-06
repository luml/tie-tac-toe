import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
  
class Board extends React.Component {
    renderSquare(i,x,y) {
      return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i,x,y)} 
            />
        );
    }
  
    render() {  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0,1,1)}
            {this.renderSquare(1,1,2)}
            {this.renderSquare(2,1,3)}
          </div>
          <div className="board-row">
            {this.renderSquare(3,2,1)}
            {this.renderSquare(4,2,2)}
            {this.renderSquare(5,2,3)}
          </div>
          <div className="board-row">
            {this.renderSquare(6,3,1)}
            {this.renderSquare(7,3,2)}
            {this.renderSquare(8,3,3)}
          </div>
        </div>
      );
    }
}
  
class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            col: 0,
            row: 0,
            bold: 900,
        }
    }

    handleClick(i,x,y) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
                col: x,
                row: y,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0,
        })
    }

    render() {
      const history = this.state.history
      const current = history[this.state.stepNumber]
      const winner = calculateWinner(current.squares)
      const currentMove = this.state.stepNumber

      const moves = history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move + ' at (' + history[move].col + ',' + history[move].row + ')':
            'Go to game start';

          if(move === currentMove){
            return(
              <li key={move}>
                  <button style={{fontWeight:this.state.bold}} onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            )
          }else {
            return(
              <li key={move}>
                  <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            )
          }
      })

      let status;
      if(winner) {
        status = 'Winner: ' + winner
      }else{
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares={current.squares}
                onClick={(i,x,y) => this.handleClick(i,x,y)}
            />
          </div>
          <div className="game-info">
            {status.startsWith("Winner") &&(
              <span role="img" aria-label="An emojis for congrats">🥂🥂🥂</span>
            )}
            <div>{status}</div>
            <ol>{moves}</ol>
            {(!winner && history.length === 10) && (
              <p>There's no winner or loser</p>
            )}
          </div>
        </div>
      );
    }
}
  
// ========================================
  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  

function calculateWinner(squares) {
    const lines = [
      // These are tripple line for winning
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          // TODO a, b, c are supposed to be highlighted
          return squares[a];
        }
    }
    return null;
}
  