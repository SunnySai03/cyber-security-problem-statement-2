// backend/services/aptosService.js
const { AptosClient, AptosAccount, HexString } = require("aptos");

const client = new AptosClient("https://fullnode.devnet.aptoslabs.com");
const privateKey = "<YOUR_PRIVATE_KEY>";
const account = new AptosAccount(HexString.ensure(privateKey).toUint8Array());

exports.logAlert = async (alert) => {
  const payload = {
    type: "entry_function_payload",
    function: "0x<YOUR_MODULE_ADDRESS>::PacketAnalyzer::log_alert",
    arguments: [
      alert.id,
      alert.timestamp,
      alert.severity,
      alert.description,
      alert.source_ip,
      alert.destination_ip,
    ],
  };

  const txnRequest = await client.generateTransaction(account.address(), payload);
  const signedTxn = await client.signTransaction(account, txnRequest);
  await client.submitTransaction(signedTxn);
};

exports.fetchAlerts = async () => {
  // Fetch alerts from Aptos (mocked here for demonstration)
  return [
    {
      id: 1,
      timestamp: Date.now(),
      severity: 2,
      description: "Suspicious traffic detected",
      source_ip: "192.168.1.1",
      destination_ip: "10.0.0.2",
    },
  ];
};
