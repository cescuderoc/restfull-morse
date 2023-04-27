const usuariosModel = require('../models/usuariosModel');

const { sqliteMiddleware } = require('../middlewares/sqliteMiddleware');

async function getAll(req, res) {
  const users = await usuariosModel.getAllUsers();
  res.json(users);
}

async function insert(req, res) {
  const { nombre, email } = req.body;
  const userId = await usuariosModel.insertUser(nombre, email);
  res.json({ id: userId });
}

async function getById(req, res) {
  const { id } = req.params;
  const user = await usuariosModel.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { nombre, email } = req.body;
  const result = await usuariosModel.updateUser(id, nombre, email);
  if (result.changes > 0) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await usuariosModel.deleteUser(id);
  if (result.changes > 0) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
}

module.exports = {
  getAll: sqliteMiddleware(getAll),
  insert: sqliteMiddleware(insert),
  getById: sqliteMiddleware(getById),
  update: sqliteMiddleware(update),
  remove: sqliteMiddleware(remove)
};
