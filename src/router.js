const express = require('express');

const categoryController = require('./controllers/category');


const router = express.Router();

router.use('/category', categoryController);

module.exports = router;
