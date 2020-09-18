const Sequelize =  require('sequelize');

const db = new Sequelize('sekolah', 'root', 'root!@#456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db