const userService = require('../service/userService')

// create docter
const createDocterData = async(req,res)=>{
    const valueData = await userService.createDocterData(req.body);
    res.send(valueData)

}

//Create Nurse

const createNurseData = async(req,res)=>{
   const valueData = await userService.createNurseData(req.body);
    res.send(valueData)
}

//create Patient


const createPatientData = async(req,res)=>{
    const valueData = await userService.createPatientData(req.body);
     res.send(valueData)
 }
 //  GET Doctor details

const getDocter = async(req,res)=>{
    const getDataDocter = await userService.getDataDocter();
    res.send(getDataDocter)

}

const getSpecificData = async(req,res)=>{
    const getData = await userService.getSpecificData1(req.params.id);
    res.send(getData)

}

//GET Nurse details

const getNurse = async(req,res)=>{
    const getDataNurse = await userService.getDataNurse();
    res.send(getDataNurse)

}

const getSpecificNurseData = async(req,res)=>{
    const getData = await userService.getSpecificData2(req.params.id);
    res.send(getData)

}

//GET Patient details

const getPatient = async(req,res)=>{
    const getDataNurse = await userService.getDataPatient();
    res.send(getDataNurse)

}

const getSpecificPatientData = async(req,res)=>{
    const getData = await userService.getSpecificData3(req.params.id);
    res.send(getData)

}

// update doc

const editDocter = async(req,res)=>{
    const edit = await userService.updateDocter(req.params.id,req.body);
    res.send(edit)
}

//update Nurse
const editNurse = async(req,res)=>{
    const edit = await userService.updateNurse(req.params.id,req.body);
    res.send(edit)
}

//Update Patient
const editPatient = async(req,res)=>{
    const edit = await userService.updatePatient(req.params.id,req.body);
    res.send(edit)
}

const deleteDetail = async(req,res)=>{
    const delData = await userService.deleteData(req.params.id);
    res.send(delData)

}


module.exports = {
    createDocterData,
    getDocter,
    getSpecificData,
    getNurse,
    getSpecificNurseData,
    createNurseData,
    editDocter,
    editNurse,
    deleteDetail,
    createPatientData,
    getPatient,
    getSpecificPatientData,
    editPatient
}

