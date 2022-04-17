const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")


//==============================question 3=====================================
const createBook= async function(req,res){
    let data = req.body
    if(data.author && data.publisher){
    let aCheck= await authorModel.find({_id:data.author}).select("_id")
    let pCheck= await publisherModel.find({_id:data.publisher}).select("_id").lean()
    if(!aCheck.length && !pCheck.length)
    res.send({msg:"author and publisher id fields is not match the data, hence invalid!"})
    else if(!aCheck.length && pCheck.length)
    res.send({msg:"author id doesn't match our data, hence invalid!"})
    else if(aCheck.length && !pCheck.length)
    res.send({msg:"publisher id doesn't match to our data, hence invalid!"})
    else{
        if(!await bookModel.exists(req.body)){
            let saveData=await bookModel.create(req.body)
            res.send({msg: saveData})
        } else res.send({msg:"this book already present in the collection!"})
    }
 }
 else if(!data.author && data.publisher)res.send({msg:" you must input author ObjectId"}) 
 else if(data.author && !data.publisher)res.send({msg:" you must input publisher ObjectId"}) 
 else res.send({msg:" you must input author and publisher ObjectId in Book Data"})  
}
module.exports.createBook= createBook
//=============================question 3======================================
// const createBook= async function (req, res) {
//     let data = req.body

//     if(data.author === undefined){
//         res.send("author is required!")
//     }
//     else if(data.author!==undefined){
//         let authorPresent=await authorModel.find({_id:data.author})
//         if(authorPresent.length === 0){
//             res.send("author is not present")
//         }

//     else if(data.publish === undefined){
//         res.send("publisher id is required!")
//     }
//     else if(data.publisher !==undefined){
//         let authorPresent=await publisherModel.find({_id:data.publish})
//         if(authorPresent.length=== 0){
//             res.send("publisher not present")
//         }
//         else{let bookCreated = await bookModel.create(data)
//             res.send({data: bookCreated})}

//     }

//     }
    
// }
// module.exports.createBook= createBook

//====================================question 4=========================================

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['author','publisher'])
    res.send({data: books})
}
module.exports.getBooksData= getBooksData

//=========================Question:5(a)===========================
const updateBook=async function(req,res){
    let pId=await publisherModel.findOne({publisherName: req.body.publisher})
  let  data = await bookModel.updateMany(
        { publisher:pId} , //condition
         {$set: {isHardCover:true }},
       )
res.send({msg:data})
}
module.exports.updateBook= updateBook

//==================question 5(b)==========================

const updateB =async (req,res)=>{
    let a_filter= await authorModel.find({rating:{$gt: 3.5}})
    await bookModel.updateMany({author:a_filter},{$inc:{price:10}})
    let data= await bookModel.find()
    res.send({msg:data})
}
module.exports.updateB= updateB


// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }


// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }