const express = require('express');
const router = express.Router();
const { subjectController } = require('../controller');

router.get('/allSubjects', subjectController.getAllSubjects);
router.get('/findOneSubject/:id', subjectController.findOneSubject);
router.post('/addSubject', subjectController.AddSubject);
router.put('/updateSubject/:id',subjectController.UpdateSubject);
router.delete('/deleteSubject/:id',subjectController.deleteSuject);

module.exports = router;