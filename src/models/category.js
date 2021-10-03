const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('Category', {
  categoryId: { type: DataTypes.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});
