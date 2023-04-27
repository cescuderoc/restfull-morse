const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    name: 'morse.db',
    path: path.resolve(__dirname, 'morse.db'),
    user: process.env.DB_USER || '',
    pass: process.env.DB_PASS || ''
  }
};
