const express = require('./express');
const sequelize = require('./sequelize');


module.exports = () => {
  express();
  sequelize();
}
