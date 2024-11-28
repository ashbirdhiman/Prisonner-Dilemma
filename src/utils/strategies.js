export const titForTat = (previousOpponentMove) => {
  return previousOpponentMove || "Cooperate";
};

export const alwaysCooperate = () => "Cooperate";

export const alwaysDefect = () => "Defect";

export const grimTrigger = (opponentHistory) => {
  return opponentHistory.includes("Defect") ? "Defect" : "Cooperate";
};

export const randomStrategy = () => {
  return Math.random() > 0.5 ? "Cooperate" : "Defect";
};
