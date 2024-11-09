// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import PacketVisualization from "./PacketVisualization";
import AlertsTable from "./AlertsTable";
import { fetchAlerts } from "../services/aptosService";

function Dashboard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const loadAlerts = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };
    loadAlerts();
  }, []);

  return (
    <div className="dashboard">
      <h1>Network Packet Analyzer Dashboard</h1>
      <PacketVisualization />
      <AlertsTable alerts={alerts} />
    </div>
  );
}

export default Dashboard;
