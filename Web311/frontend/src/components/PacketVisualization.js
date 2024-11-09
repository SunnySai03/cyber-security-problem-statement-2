// frontend/src/components/PacketVisualization.js
import React from "react";
import { Line } from "react-chartjs-2";

const PacketVisualization = () => {
  const data = {
    labels: ["Time 1", "Time 2", "Time 3"],
    datasets: [
      {
        label: "Packet Activity",
        data: [65, 59, 80],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  return (
    <div>
      <h2>Packet Visualization</h2>
      <Line data={data} />
    </div>
  );
};

export default PacketVisualization;
