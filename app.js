const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var morse = require('morse-node').create();
 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Rutas de la API RESTful
app.get('/api/hola', (req, res) => {
  res.send('Hola, mundo!');
});

app.post('/api/parrafo', (req, res) => {
  const a = req.body.parrafo
  console.log(a);
  var encoded = morse.encode(a);
  console.log(encoded);
  res.json(encoded);
});

app.post('/api/morse', (req, res) => {
  const a = req.body.morse
  console.log(a);
  var decoded = morse.decode(a);
  console.log(decoded);
  res.json(decoded);
});

// Configuración del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
