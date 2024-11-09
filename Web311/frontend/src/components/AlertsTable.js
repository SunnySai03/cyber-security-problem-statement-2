// frontend/src/components/AlertsTable.js
import React from "react";

const AlertsTable = ({ alerts }) => (
  <div>
    <h2>Alerts</h2>
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Source IP</th>
          <th>Destination IP</th>
          <th>Severity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert, index) => (
          <tr key={index}>
            <td>{new Date(alert.timestamp).toLocaleString()}</td>
            <td>{alert.source_ip}</td>
            <td>{alert.destination_ip}</td>
            <td>{alert.severity}</td>
            <td>{alert.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AlertsTable;
