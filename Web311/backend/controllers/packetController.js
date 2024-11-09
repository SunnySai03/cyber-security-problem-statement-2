// backend/controllers/packetController.js
const packetService = require("../services/packetService");
const aptosService = require("../services/aptosService");

exports.capturePacket = async (req, res) => {
  const packetData = req.body;
  const alert = packetService.analyzePacket(packetData);

  if (alert) {
    await aptosService.logAlert(alert);
    return res.status(201).json({ message: "Anomaly detected", alert });
  }
  res.status(200).json({ message: "Packet processed" });
};

exports.getAlerts = async (req, res) => {
  const alerts = await aptosService.fetchAlerts();
  res.json(alerts);
};
