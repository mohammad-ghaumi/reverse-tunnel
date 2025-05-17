const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.text({ type: '*/*' }));

app.post('/', (req, res) => {
    const data = req.body;
    console.log('[+] Received data:', data);
    fs.appendFileSync('log.txt', data + '\n');
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.listen(PORT, () => {
    console.log(`[+] Server listening on port ${PORT}`);
});