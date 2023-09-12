const express = require('express')
const router = express.Router();
const userCont = require('../controller/userCont')

router.post('/docter/data',userCont.createDocterData)
router.post('/nurse/add', userCont.createNurseData);
router.post('/Patient/add', userCont.createPatientData);
router.get('/get/docter',userCont.getDocter);
router.get('/get/specific/docter/:id',userCont.getSpecificData)
router.get('/get/nurse',userCont.getNurse);
router.get('/get/specific/nurse/:id',userCont.getSpecificNurseData);
router.get('/get/Patient',userCont.getPatient);
router.get('/get/specific/patient/:id',userCont.getSpecificPatientData);
router.put('/put/edit/docter/:id',userCont.editDocter)
router.put('/put/edit/nurse/:id',userCont.editNurse)
router.put('/put/edit/Patient/:id',userCont.editPatient)
router.delete('/delete/data/:id',userCont.deleteDetail)
module.exports = router;