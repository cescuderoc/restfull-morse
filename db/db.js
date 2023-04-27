const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const config = require('./config');


async function openDbConnection() {
  return open({
    filename: config.db.name,
    driver: sqlite3.Database,
  });
}

module.exports = {
  openDbConnection
};
