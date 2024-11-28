import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ResultVisualization = ({ results }) => {
  const data = {
    labels: ["Player 1", "Player 2"],
    datasets: [
      {
        label: "Total Score",
        data: [results.player1Score, results.player2Score],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="results">
      <h3>Results</h3>
      <Bar data={data} />
    </div>
  );
};

export default ResultVisualization;
