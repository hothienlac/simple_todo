const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('User', {
  userId: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});
