const BatchModel= require("../models/batchModel")
const DeveloperModel=require("../models/developerModel")
//=========================================================================
const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await BatchModel.create(batch)
    res.send({data: batchCreated})
}
module.exports.createBatch= createBatch
//==============================question 2=============================================

const createDeveloper = async function (req, res) {
    let developer = req.body
    let developerCreated = await DeveloperModel.create(developer)
    res.send({data: developerCreated })
}
module.exports.createDeveloper= createDeveloper

//=================================Question 3=======================================

const schollership =async function(req,res){
    let schollershipD =await DeveloperModel.find({$and:[{gender:"female"},{percentage:{$gte:70}}]})
    res.send({msg:schollershipD})

}

module.exports.schollership= schollership


//=============================Question 4============================================


const developers =async function (req, res){
    let data =req.query
    
    const batch=await BatchModel.find({name:data.program})
    let x = []
    for( let i in batch){

        const developer= await DeveloperModel.find({percentage:{$gte:data.percentage},batch:batch[i]}).populate("batch")
        x.push(...developer)
    }
    
    res.send({msg:x})
}
module.exports.developers= developers