import React from "react";

const RandomRounds = ({ setRounds }) => {
  const handleRandomRounds = () => {
    const random = Math.floor(Math.random() * 901) + 100; // Between 100 and 1000
    setRounds(random);
  };

  return (
    <div className="rounds">
      <h3>Set Rounds</h3>
      <input
        type="number"
        placeholder="Enter number of rounds"
        onChange={(e) => setRounds(Number(e.target.value))}
      />
      <button onClick={handleRandomRounds}>Randomize Rounds</button>
    </div>
  );
};

export default RandomRounds;
