const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema( {
  
    author_id: {
           type:Number,
           required: true
       },
           author_name:String,
           age:Number,
           address: String
           
       // Books: { 
       //     name:String,
       //     author_id:Number,
       //     price:Number,
       //     ratings:4.5,
       // } ,
       // Book :  mongoose.Schema.Types.Mixed,
   
   }, { timestamps: true });
   
   
   module.exports = mongoose.model('Author', AuthorSchema) //users 