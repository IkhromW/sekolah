const { modelSubject } = require('../models');

module.exports = {
  getAllSubjects : async(req,res) => {
    try{
      let result = await modelSubject.findAll()
      res.status(200).send(result)
    }
    catch(err){
      res.status(500).send(err)
      console.log(err); 
    }
  },
  findOneSubject : async(req, res) => {
    try{
      let result = await modelSubject.findOne({
        where : {
          id : req.params.id
        }
      })
      res.status(200).send(result)
    }
    catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  },
  AddSubject : async(req, res) => {
    try{
      let result = await modelSubject.findOne({
        where : {
          Pelajaran: req.body.Subject
        }
      })
      if(result){
        res.status(404).send({
          "message" : 'Subject already exist'
        })
      }
      else{
        let subject = await modelSubject.create({
          Pelajaran : req.body.Subject
        })
        res.status(200).send(subject)
      }
    }
    catch(err){
      res.status(500).send(err)
      console.log(err);
    }
  },
  UpdateSubject : async(req,res) => {
    try{
      let result = await modelSubject.update({
        Pelajaran : req.body.Subject
      },{
        where : {
          id : req.params.id
        }
      })
      res.status(200).send({
        "message" : "data updated ",
        result
        
      })
    }
    catch(err){
      res.status(500).send(err)
    }
  },
  deleteSuject : async(req, res) => {
    try{
      await modelSubject.destroy({
        where : {
          id : req.params.id
        }
      })
      res.status(200).send({
        "message" : "data deleted"
      })
    }
    catch(err){
      console.log(err);
      
    }
  }
}