const express = require('express');
const app = express();

const usuariosRoute = require('./routes/usuariosRoute');
const { sqliteMiddleware } = require('./middlewares/sqliteMiddleware');


app.use(express.json());
app.use(sqliteMiddleware);

app.use('/usuarios', usuariosRoute);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
