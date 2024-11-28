import React, { useState } from "react";
import Explanation from "./components/Explanation";
import StrategySelection from "./components/StrategySelection";
import RandomRounds from "./components/RandomRounds";
import GameBoard from "./components/GameBoard";
import ResultVisualization from "./components/ResultVisualization";
import {
  titForTat,
  alwaysCooperate,
  alwaysDefect,
  grimTrigger,
  randomStrategy,
} from "./utils/strategies";

const App = () => {
  const [rounds, setRounds] = useState(100);
  const [playerStrategies, setPlayerStrategies] = useState({
    1: "titForTat",
    2: "titForTat",
  });
  const [results, setResults] = useState(null);

  const strategies = {
    titForTat,
    alwaysCooperate,
    alwaysDefect,
    grimTrigger,
    randomStrategy,
  };

  const setPlayerStrategy = (player, strategy) => {
    setPlayerStrategies((prev) => ({ ...prev, [player]: strategy }));
  };

  return (
    <div className="app">
      <Explanation />
      <StrategySelection
        strategies={strategies}
        setPlayerStrategy={setPlayerStrategy}
      />
      <RandomRounds setRounds={setRounds} />
      <GameBoard
        strategies={strategies}
        rounds={rounds}
        playerStrategies={playerStrategies}
        setResults={setResults}
      />
      {results && <ResultVisualization results={results} />}
    </div>
  );
};

export default App;
