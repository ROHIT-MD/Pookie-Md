const http = require('http');
const config = require('./config');
const pairState = require('./pairState');

const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 3000);

function pairNumber() {
  return pairState.number || config.pairingNumber || process.env.PAIRING_NUMBER || (config.ownerNumber && config.ownerNumber[0]) || 'not set';
}

function page() {
  const bot = config.botName || 'Pookie md';
  const pairCode = pairState.code || 'Waiting for bot start...';
  const pairNum = pairNumber();
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="3">
  <title>${bot} Pair Code</title>
  <style>
    body { font-family: Arial, sans-serif; background:#111; color:#eee; max-width:640px; margin:40px auto; padding:0 16px; }
    h1 { color:#ff7eb3; }
    .card { background:#1c1c1c; border:1px solid #333; border-radius:12px; padding:16px; margin:16px 0; }
    .code { font-size:36px; letter-spacing:6px; color:#7cffb2; font-weight:bold; }
  </style>
</head>
<body>
  <h1>${bot}</h1>
  <div class="card">
    <h2>8 Digit Pair Code</h2>
    <p>Number: <b>${pairNum}</b></p>
    <p class="code">${pairCode}</p>
    <p>WhatsApp &gt; Linked Devices &gt; Link with phone number &gt; enter this 8-digit code.</p>
    <p>No SESSION_ID needed.</p>
  </div>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  const url = (req.url || '/').split('?')[0];
  if (url === '/pair.json') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      number: pairNumber(),
      code: pairState.code || '',
      bot: config.botName || 'Pookie md'
    }));
    return;
  }
  if (url === '/pair' || url === '/' || url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page());
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${config.botName} is online`);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Keep-alive server listening on 0.0.0.0:${PORT}`);
});

module.exports = server;
