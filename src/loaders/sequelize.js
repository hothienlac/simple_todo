const { Sequelize } = require('sequelize');
const repository = require('../models/repository');

module.exports = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
    },
  );
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    repository.initialize(sequelize);
    // await sequelize.sync({ force: false });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  return sequelize;
}





