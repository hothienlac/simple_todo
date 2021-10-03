const express = require('express');
const httpStatus = require('http-status');

const repository = require('../models/repository');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const allCategories = await repository.category.findAll();
    return res.status(httpStatus.OK).json(allCategories);
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
})

router.post('/', async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;

    const categoryExist = await repository.category.findOne({where: {name}});
    if (categoryExist) return res.status(httpStatus.BAD_REQUEST).json({message: 'Category already exists'});

    await repository.category.create({name, description});

    return res.status(httpStatus.OK).send();
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({err});
  }
})


module.exports = router;
