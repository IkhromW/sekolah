const express = require('express');
const router = express.Router();
const { siswaController } = require('../controller');

router.get('/',siswaController.getAllStudents);
router.get('/findOne/:id',siswaController.findOneStudent);
router.post('/addSiswa',siswaController.addStudent);
router.put('/updateSiswa/:id',siswaController.updateStudent);
router.delete('/deleteSiswa/:id',siswaController.deleteStudent);


module.exports = router