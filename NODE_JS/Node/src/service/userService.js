const nurseModel = require('../model/Nurse')
const docterModel = require('../model/Doctor')
const patientModel = require('../model/Patient')

const createDocterData = async(userBody)=>{
    const datas = await docterModel.create(userBody);
    return datas;
}
const createNurseData = async(userBody)=>{
    const datas = await nurseModel.create(userBody);
    return datas;
}

const createPatientData = async(userBody)=>{
    const datas = await patientModel.create(userBody);
    return datas;
}



const getDataDocter = async()=>{

    const valueDocter = await docterModel.aggregate([
        {
            $match: {
                $and:[{active: {$eq: true}}]
            }
        }
    ]);

    return valueDocter

}

const getSpecificData1 = async(id)=>{
    console.log(id)

    const getData = await docterModel.aggregate([
        {
            $match: {
                $and: [{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getData

}
const getDataNurse = async()=>{

    const valueNurse = await nurseModel.aggregate([
        {
            $match: {
                $and:[{active: {$eq: true}}]
            }
        }
    ]);

    return valueNurse

}

const getSpecificData2 = async(id)=>{
    console.log(id)

    const getData = await nurseModel.aggregate([
        {
            $match: {
                $and: [{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getData

}

const getDataPatient = async()=>{

    const valuePatient = await patientModel.aggregate([
        {
            $match: {
                $and:[{active: {$eq: true}}]
            }
        }
    ]);

    return valuePatient

}

const getSpecificData3 = async(id)=>{
    console.log(id)

    const getData = await patientModel.aggregate([
        {
            $match: {
                $and: [{_id:id},{active:{ $eq: true}}]
            }
        }
    ]);
    return getData

}

// edit doc
const updateDocter = async(id,body)=>{
    const checkId = await docterModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const isPresent = await docterModel.findByIdAndUpdate({_id:id},body,{new:true});
    return isPresent;
}

//edit nurse
const updateNurse = async(id,body)=>{
    const checkId = await nurseModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const isPresent = await nurseModel.findByIdAndUpdate({_id:id},body,{new:true});
    return isPresent;
}

const updatePatient = async(id,body)=>{
    const checkId = await patientModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const isPresent = await patientModel.findByIdAndUpdate({_id:id},body,{new:true});
    return isPresent;
}


const deleteData = async(id)=>{
    const checkId = await nurseModel.findById(id);
    if(!checkId){
        console.log("not found")
    }
    const delPresent = await nurseModel.findByIdAndRemove(id);
    return delPresent;
}

module.exports={
    createNurseData,
    createDocterData,
    getDataDocter,
    getSpecificData1,
    getDataNurse,
    getSpecificData2,
    updateDocter,
    updateNurse,
    deleteData,
    createPatientData,
    getDataPatient,
    getSpecificData3,
    updatePatient
}
