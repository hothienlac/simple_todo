const express = require('express');
const httpStatus = require('http-status');

const router = require('../router');


module.exports = () => {
  app = express();

  app.use(express.urlencoded({extended: true}));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.status(httpStatus.OK).json({message: 'App is running...'})
  })

  app.use('/', router)

  app.listen(process.env.PORT, () => console.log('Server Started'));
}
