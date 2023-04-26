const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Rutas de la API RESTful
app.get('/api/hola', (req, res) => {
  res.send('Hola, mundo!');
});

app.get('/api', (req, res) => {
  const usuarios = 'hola';
  res.json(usuarios);
});

app.get('/api/usuarios', (req, res) => {
    const usuarios = [
      { id: 1, nombre: 'Juan', correo: 'juan@gmail.com' },
      { id: 2, nombre: 'María', correo: 'maria@gmail.com' },
      { id: 3, nombre: 'Pedro', correo: 'pedro@gmail.com' },
    ];
    res.json(usuarios);
  });

app.post('/api/usuarios', (req, res) => {
  const { nombre, correo } = req.body;
  const nuevoUsuario = { id: 4, nombre, correo };
  res.json(nuevoUsuario);
});

// Configuración del servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
