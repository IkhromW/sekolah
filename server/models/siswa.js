const Sequelize = require('sequelize');
const db = require('../config/database');

const Siswa = db.define('students',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Kelas: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
module.exports = Siswa