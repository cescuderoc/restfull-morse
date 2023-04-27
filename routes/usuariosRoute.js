const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const { sqliteMiddleware } = require('./middlewares/sqliteMiddleware');

router.get('/', sqliteMiddleware, usuariosController.getAll);
router.get('/:id', sqliteMiddleware, usuariosController.getById);
router.post('/', sqliteMiddleware, usuariosController.create);
router.put('/:id', sqliteMiddleware, usuariosController.update);
router.delete('/:id', sqliteMiddleware, usuariosController.delete);

module.exports = router;
