import React, { useState } from "react";

const GameBoard = ({ strategies, rounds, playerStrategies, setResults }) => {
  const [currentRound, setCurrentRound] = useState(0);

  const playGame = () => {
    let player1History = [];
    let player2History = [];
    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < rounds; i++) {
      const player1Move = strategies[playerStrategies[1]](
        player2History.at(-1)
      );
      const player2Move = strategies[playerStrategies[2]](
        player1History.at(-1)
      );

      player1History.push(player1Move);
      player2History.push(player2Move);

      if (player1Move === "Cooperate" && player2Move === "Cooperate") {
        player1Score += 3;
        player2Score += 3;
      } else if (player1Move === "Cooperate" && player2Move === "Defect") {
        player2Score += 5;
      } else if (player1Move === "Defect" && player2Move === "Cooperate") {
        player1Score += 5;
      } else {
        player1Score += 1;
        player2Score += 1;
      }
    }

    setResults({ player1History, player2History, player1Score, player2Score });
  };

  return (
    <div className="game-board">
      <button onClick={playGame}>Play Game</button>
    </div>
  );
};

export default GameBoard;
