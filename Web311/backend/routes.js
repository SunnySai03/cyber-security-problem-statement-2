// backend/routes.js
const express = require("express");
const router = express.Router();
const packetController = require("./controllers/packetController");

router.post("/capture", packetController.capturePacket);
router.get("/alerts", packetController.getAlerts);

module.exports = router;
