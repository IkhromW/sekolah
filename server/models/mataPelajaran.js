const Sequelize = require('sequelize');
const db = require('../config/database');

const Subject = db.define('subjects',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Pelajaran : {
    type: Sequelize.STRING,
    allowNull: false
  },
})
module.exports = Subject