const user = require('./user');
const category = require('./category');


class Repository {

  initialize(sequelize) {
    this.user = user(sequelize);
    this.category = category(sequelize);
  }

}


module.exports = new Repository();
