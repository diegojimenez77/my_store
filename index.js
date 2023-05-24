const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json([{
    name: 'Producto 1',
    price: 1000
  },
  {
    name: 'Producto 2',
    price: 2000
  }
  ]);
});

app.get('/productos/:id', (req, res) => {
  const { id }= req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  });
});

app.get('/categorias/:categoryId/productos/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.listen(port, () => {
  console.log('Mi port'+ port);
});
