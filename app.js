const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API RESTful funcionando correctamente' });
});

router.route('/usuarios')
  .get((req, res) => {
    // Aquí se obtendrían los usuarios desde una base de datos o un archivo, por ejemplo
    const usuarios = [{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'María' }];
    res.json(usuarios);
  })
  .post((req, res) => {
    // Aquí se crearía un nuevo usuario con los datos que llegan en el cuerpo de la petición
    const nuevoUsuario = { id: 3, nombre: req.body.nombre };
    res.status(201).json(nuevoUsuario);
  });

router.route('/usuarios/:id')
  .get((req, res) => {
    // Aquí se buscaría y devolvería el usuario con el ID especificado en la URL
    const usuario = { id: req.params.id, nombre: 'Juan' };
    res.json(usuario);
  })
  .put((req, res) => {
    // Aquí se actualizaría el usuario con el ID especificado en la URL con los datos que llegan en el cuerpo de la petición
    const usuarioActualizado = { id: req.params.id, nombre: req.body.nombre };
    res.json(usuarioActualizado);
  })
  .delete((req, res) => {
    // Aquí se eliminaría el usuario con el ID especificado en la URL
    res.status(204).send();
  });

app.use('/api', router);

app.listen(port);
console.log(`API RESTful funcionando en http://localhost:${port}/api`);
