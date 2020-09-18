const express = require('express');
const cors = require('cors');

const db = require('./config/database');
const { siswaRouter, subjectRouter, daftarRouter } = require('./routes');
const { modelSiswa, modelSubject, modelDaftar } = require('./models');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors())

//Test DB
db.authenticate() 
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(err))

modelSiswa.sync()
  .then(() => console.log('Tabel Siswa created ...'));

modelSubject.sync()
  .then(() => console.log('Tabel Subject created ...'));

modelDaftar.sync()
  .then(() => console.log('Tabel Daftar created ...'))


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res) => res.send('INDEX'))
app.use('/admin',siswaRouter);
app.use('/admin',subjectRouter);
app.use('/admin',daftarRouter);

app.listen(PORT, console.log(`Server started on PORT ${PORT}`))