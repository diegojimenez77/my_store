const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/special', (req, res) => {
  const products = [];
  for (let i = 0; i < 10; i++) {
    products.push({
      name: faker.commerce.productName(),
      price:parseInt(faker.commerce.price(), 10),
      imageUrl: faker.image.imageUrl(),
      image: faker.image.cats(),
      datatype: faker.datatype.json()
    })
  }
  res.json(products)
})

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res) => {
  const { id }= req.params;
  if (id === '999') {
    res.status(404).json({
      mesage: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      name: 'Producto 2',
      price: 2000
  });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
    id,
  });
});
module.exports = router;
