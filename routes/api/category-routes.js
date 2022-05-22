const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name','price','stock', 'category_id']
    }]
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  const categoryData = Category.findbyPk(req.params.id, {include: Product })
  if (!categoryData) {
    res.status(404).json({message:'Category Not Found!'});
    return;
  }
  res.status(200).json(categoryData)
});

router.post('/', (req, res) => {
  const categoryData = Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(categoryData)
});

router.put('/:id', (req, res) => {
  const categoryData = Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(categoryData)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const categoryData = Category.destroy({
    where: {
      id: req.params.id
    }
  })
  if (!categoryData) {
    res.status(404).json({message:'Category Not Found!'});
  }
  res.status(200).json(categoryData)
});

module.exports = router;
