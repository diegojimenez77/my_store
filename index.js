const express = require('express');
const routerApi = require('./routes/index')

const app = express();
const port = 3001;

//el middleware se usa para cachar los posts.
app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.listen(port, () => {
  console.log('Mi port'+ port);
});
