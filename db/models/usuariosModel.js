const dbMiddleware = require('../middlewares/dbMiddleware');
const { sqliteMiddleware } = require('../middlewares/sqliteMiddleware');

class Usuario {
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }

  static async getAll() {
    const rows = await sqliteMiddleware.all('SELECT * FROM usuarios');
    return rows.map(row => new Usuario(row.id, row.nombre, row.email));
  }

  static async getById(id) {
    const row = await sqliteMiddleware.get('SELECT * FROM usuarios WHERE id = ?', id);
    return new Usuario(row.id, row.nombre, row.email);
  }

  async save() {
    const result = await sqliteMiddleware.run(`
      INSERT INTO usuarios (nombre, email)
      VALUES (?, ?)
    `, [this.nombre, this.email]);
    this.id = result.lastID;
  }

  async update() {
    await sqliteMiddleware.run(`
      UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?
    `, [this.nombre, this.email, this.id]);
  }

  static async deleteById(id) {
    await sqliteMiddleware.run('DELETE FROM usuarios WHERE id = ?', id);
  }
}

module.exports = Usuario;
