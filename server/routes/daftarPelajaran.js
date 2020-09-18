const express = require('express');
const router = express.Router();
const { daftarController } = require('../controller');

router.post('/addDaftar', daftarController.addSiswaPelajaran);
router.get('/Daftar',daftarController.getAllData);
router.get('/daftarbyIdSiswa/:id',daftarController.getDatabyIdSiswa);
router.delete('/deleteSelectedSubjects/:id',daftarController.deleteSelectedSubjects);
router.put('/updateSelSubs/:id',daftarController.editSelectedSubjects);
router.get('/daftarbyId/:id',daftarController.findOneSelectedSubjects);
router.get('/daftarGroupByName', daftarController.getAllDataByName);

module.exports = router;