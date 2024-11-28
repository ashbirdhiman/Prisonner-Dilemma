import React from "react";

const Explanation = () => {
  return (
    <div className="explanation">
      <h2>Prisoner's Dilemma</h2>
      <p>
        The Prisoner's Dilemma is a game theory scenario where two players can
        choose to cooperate or defect. The payoffs are:
      </p>
      <ul>
        <li>Both cooperate: Both get moderate rewards.</li>
        <li>
          One cooperates, the other defects: The cooperator gets punished, and
          the defector gets a high reward.
        </li>
        <li>Both defect: Both get low rewards.</li>
      </ul>
    </div>
  );
};

export default Explanation;
