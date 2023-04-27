const { openDbConnection } = require('./db');

async function sqliteMiddleware(req, res, next) {
  const db = await openDbConnection();
  req.db = db;
  next();
}

module.exports = {
  sqliteMiddleware
};