const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var morse = require('morse-node').create();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API RESTful funcionando correctamente' });
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

app.use('/api', router);

app.listen(port);
console.log(`API RESTful funcionando en http://localhost:${port}/api`);
