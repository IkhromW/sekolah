const Sequelize = require('sequelize');
const db = require('../config/database');
const Siswa = require('./siswa');
const Pelajaran = require('./mataPelajaran');

const Daftar = db.define('Daftar',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
},{
  timestamps: false
})

Siswa.belongsToMany(Pelajaran, { through: Daftar, unique: false });
Pelajaran.belongsToMany(Siswa, { through: Daftar, unique: false });
Siswa.hasMany(Daftar);
Pelajaran.hasMany(Daftar);
Daftar.belongsTo(Siswa);
Daftar.belongsTo(Pelajaran);

module.exports = Daftar;

