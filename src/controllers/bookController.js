const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const bookModel = require("../models/bookModel")

//========================QUESTION:1===================================

const createAuthor= async function (req, res) {
    let Adata= req.body

    let savedAuthorData= await AuthorModel.create(Adata)
    res.send({msg: savedAuthorData})
} 
module.exports.createAuthor= createAuthor

const createBook= async function(req, res){
    let Bdata= req.body

let saveBookData= await BookModel.create(Bdata)
res.send({msg:saveBookData})
}
module.exports.createBook=createBook

//===============================ANSWER:2===============================

const listOfBooks= async function(req,res){
    let authorBook= await AuthorModel.find({author_name: "Chetan Bhagat"})
    const id= authorBook[0].author_id
    const bookName= await bookModel.find({author_id: id  }).select({book_name : 1})
    res.send({msg:bookName})
}
module.exports.listOfBooks=listOfBooks

//===============================ANSWER:3===============================

const updateBookPrice= async function(req, res){
    const bookDetails= await BookModel.find({book_name: "Two States"})
    const id= bookDetails[0].author_id
    const authorN= await AuthorModel.find({author_id: id }).select({author_name:1, _id:0})
    const booksName= bookDetails[0].book_name
    const updatePrice= await BookModel.findOneAndUpdate({book_name:booksName},
        {price:100},
        { new: true }).select({price:1, _id:0})
        res.send({msg: authorN, updatePrice})
}
module.exports.updateBookPrice= updateBookPrice

//==============================ANSWER:4===================================

const findAuthorName= async function(req, res){
   let idOfBook = await BookModel.find({price:{$gt:50,  $lt:100 }}).select({author_id:1, _id:0})
   const id= idOfBook.map(price => price.author_id)
   let arr=[]
   for(let i=0; i<id.length;i++){
       let x= id[i]
       const author= await AuthorModel.find({author_id:x}).select({author_name:1, _id:0})
       arr.push(author)
   }
   const authorName=arr.flat()
   res.send({msg:authorName})
}
module.exports.findAuthorName= findAuthorName


//===========================================================================
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// // const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
