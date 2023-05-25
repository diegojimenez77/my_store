const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  res.json ([
    {
      categories: faker.commerce.productAdjective(),
    },
    {
      categories: faker.commerce.productAdjective(),
    },
    {
      categories: faker.commerce.productAdjective(),
    },
    {
      categories: faker.commerce.productAdjective(),
    },
    {
      categories: faker.commerce.productAdjective(),
    },
  ]);
});

router.get('/:categoryId/productos/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
})

module.exports = router;
