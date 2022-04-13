const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

//=======================1=====================
const createBook= async function (req, res) {
    let data=req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
    }

    module.exports.createBook= createBook
//======================2====================================
    const bookList= async function (req, res) {
        let allBooks = await BookModel.find().select( { bookName: 1, authorName: 1 , _id: 0})
    
             res.send({msg: allBooks})
     }
     module.exports.bookList= bookList

//==================3======================================
     const getBooksInYear = async function(req, res){
       
         let allBooksY = await BookModel.find({year : {$eq:2021}})
    
         res.send({msg: allBooksY})
     }
     module.exports.getBooksInYear= getBooksInYear

//==============================4=========================
const getParticularBooks = async function(req,res)
{
  let condition = req.body
  let particularBooks = await bookModel.find(condition)

  res.send(particularBooks)
}

    // const getParticularBooks = async function(req, res){
    //     // {
    //         let condition = req.body
    //         let particularBooks = await bookModel.find(condition)
          
    //         res.send(particularBooks)
    //       }
          
    //     let allBooksP = await bookModel.find( { 
    //              $or: [{ bookName:  /^hi/i  },{ "year": 2020}]
    //         } )
    //         res.send({msg: allBooksP})

    // }
    module.exports.getParticularBooks= getParticularBooks
//================================5===========================
    const getXINRBooks= async function(req, res){
        let allBooksX = await bookModel.find(  {"prices.indianPrice ": {$in:["inr100","inr200","inr500"]}})
       res.send({msg: allBooksX})
    }
    module.exports.getXINRBooks= getXINRBooks

 //===================================6======================    
    const getRandomBooks= async function(req, res){
        let getRandomBooks = await bookModel.find( {$or: [{stockAvailable: true} , {totalPages  :{$gt: 500}}] } )
       res.send({msg:getRandomBooks })
    }
   
    module.exports.getRandomBooks= getRandomBooks

const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0}) // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    let a= 2+4
    a= a + 10
    console.log(a)
    let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    console.log(allBooks)
    let b = 14
    b= b+ 10
    console.log(b)
    res.send({msg: allBooks})
}

module.exports.getBooksData= getBooksData












