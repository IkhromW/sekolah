const { modelDaftar } = require('../models');
const Siswa = require('../models/siswa');
const Pelajaran = require('../models/mataPelajaran');
const GroupByName = require('../test');

module.exports = {
  getAllData : async(req, res) => {
    try{
      let results = await modelDaftar.findAll({
        attributes: ['id', 'studentId'],
        include: [{
          model: Siswa,
          attributes: ['Nama']
        },{
          model: Pelajaran,
          attributes: ['Pelajaran']
        }]
      })

      res.status(200).send(results)
    }
    catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  },
  addSiswaPelajaran : async(req, res) => {
    try {
      let result = await modelDaftar.create({
        studentId: req.body.student,
        subjectId: req.body.subject
      })
      res.status(200).send(result);

    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },
  getDatabyIdSiswa: async(req,res) => {
    try{
      let results = await modelDaftar.findAll({
        attributes: ['id'],
        include: [{
          model: Siswa,
          attributes: ['Nama'],
          where : {
            id : req.params.id
          }
        },{
          model: Pelajaran,
          attributes: ['Pelajaran']
        }]
      })
      res.status(200).send(results)
    }
    catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  },
  deleteSelectedSubjects : async(req,res) => {
    try {
     await modelDaftar.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).send({
        "message" : "Delete Success"
      })
    } catch (error) {
      res.status(500).send(error)
    } 
  },
  editSelectedSubjects : async(req,res) => {
    try {
      await modelDaftar.update({
        studentId: req.body.student,
        subjectId: req.body.subject
      },{
        where: {
          id: req.params.id
        }
      })
      res.status(200).send({
        "message" : "update success"
      })
    } catch (error) {
      res.status(500).send(error)
    }
  },
  findOneSelectedSubjects: async(req,res) => {
    try {
      let result = await modelDaftar.findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: Siswa,
          attributes: ['id', 'Nama']
        },{
          model: Pelajaran,
          attributes: ['id', 'Pelajaran']
        }
      ]
      })
      res.status(200).send(result)

    } catch (error) {
      res.status(500).send(error)
    }
  },
  getAllDataByName : async(req, res) => {
    try{
      let results = await modelDaftar.findAll({
        attributes: ['id', 'studentId'],
        include: [{
          model: Siswa,
          attributes: ['Nama']
        },{
          model: Pelajaran,
          attributes: ['Pelajaran']
        }]
      })
      let hasil = await GroupByName(results)
      res.status(200).send(hasil)
    }
    catch(err){
      res.status(500).send(err);
      console.log(err);
    }
  }
}