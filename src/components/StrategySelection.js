import React from "react";

const StrategySelection = ({ strategies, setPlayerStrategy }) => {
  return (
    <div className="strategy-selection">
      <h3>Select Strategies</h3>
      <div>
        <label>Player 1 Strategy: </label>
        <select onChange={(e) => setPlayerStrategy(1, e.target.value)}>
          {Object.keys(strategies).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Player 2 Strategy: </label>
        <select onChange={(e) => setPlayerStrategy(2, e.target.value)}>
          {Object.keys(strategies).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default StrategySelection;
