const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name','price','stock', 'category_id']
    }]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = Tag.findbyPk(req.params.id, {include: Product })
  if (!tagData) {
    res.status(404).json({message:'Tag Not Found!'});
    return;
  }
  res.status(200).json(tagData)
});

router.post('/', (req, res) => {
  // create a new tag
  const tagData = Tag.create({
    tag_name: req.body.tag_name
  })
  res.status(200).json(tagData)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const tagData = Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(tagData)
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const tagData = Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  if (!tagData) {
    res.status(404).json({message:'Tag Not Found!'});
  }
  res.status(200).json(tagData)
});

module.exports = router;
