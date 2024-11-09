// backend/services/packetService.js
exports.analyzePacket = (packetData) => {
    if (packetData.type === "suspicious") {
      return {
        id: Date.now(),
        timestamp: Date.now(),
        severity: 2,
        description: "Suspicious packet detected",
        source_ip: packetData.source_ip,
        destination_ip: packetData.destination_ip,
      };
    }
    return null;
  };
  