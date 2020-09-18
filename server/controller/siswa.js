const { modelSiswa } = require('../models');

module.exports = {
  getAllStudents : (req,res) => {
    modelSiswa.findAll()
      .then(siswa => {
        res.status(200).send(siswa)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },
  addStudent : (req,res) => {
    modelSiswa.findOne({where : {
      Nama: req.body.Nama,
      Kelas: req.body.Kelas
    }})
    .then(siswa => {
      if(siswa){
        return res.status(406).send({
          'message' : 'Siswa sudah terdaftar'
        })
      }
      else{
        modelSiswa.create({
          Nama : req.body.Nama,
          Kelas: req.body.Kelas
        })
        .then((siswa) => {
          console.log(siswa)
          res.status(200).send({
            'message' : 'Adding Success'
          })
        })
        .catch(err => {
          res.status(500).send({'message' : err})
          console.log(err);
          
        })
      }
    })
    .catch(err => {
      res.status(500).send({'message' : err})
      console.log(err);
    })
  },
  updateStudent : async(req,res) => {
    try{
      await modelSiswa.update({
        Nama : req.body.Nama,
        Kelas: req.body.Kelas
      },{
        where : {
          id : req.params.id
        }
      })
      res.status(200).send({
        "message" : 'Data Updated'
      })
    }
    catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  },
  deleteStudent: async(req, res) => {
    try{
      await modelSiswa.destroy({
        where : {
          id: req.params.id
        }
      })
      res.status(200).send({
        'Message': 'Data Deleted'
      })
    }
    catch(err){
      res.status(500).send(err)
      console.log(err);
    }    
  },
  findOneStudent : async(req,res) => {
    try{
      let result = await modelSiswa.findOne({
        where: {
         id : req.params.id
        }
      })
      res.status(200).send(result)
    }
    catch(err){
      res.status(500).send({
        "message" : err
      })
      console.log(err);
    }
  }
}