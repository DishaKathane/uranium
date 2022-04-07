const express = require('express');
const logger = require('../logger/logger.js')
const help = require('../util/helper.js')
const trimmer = require('../validator/formatter.js')
const lodash = require('lodash')

const router = express.Router();
router.get('/test-me', function (req, res) {
   ////1////
     logger.fun
     ///2/////
    help.printDate()
    help.printMonth()
    help.getBatchInfo()
    /////3//////
    trimmer.trim()
    trimmer.toUpperCase()
    trimmer.toLowerCase()
     res.send("my test-me api");
}); 

    ///4/////
router.get("/hello", function(req,res){
const month =['january', 'febreary','march','april','may','jun','july','august','suptember','october','november','descember']
const newMonth = lodash.chunk(month,4)

console.log(newNonth)
  
const firstTenOdd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const lastNineElements = lodash.tail(firstTenOdd);
console.log(lastNineElements);

//////// 5TH //////////
const filteredArray = lodash.union(
  [1, 1, 2],
  [2, 2, 3],
  [3, 3, 4],
  [4, 4, 5],
  [5, 5, 1]
);
console.log(filteredArray);

//------------------------------------------------------//
const keyValuePairResult = lodash.fromPairs([
  ["horror", "The Shining"],
  ["drama", "Titanic"],
  ["thriller", "Shutter Island"],
  ["fantasy", "Pans Labyrinth"],
]);
console.log(keyValuePairResult);

res.send("MY HELLO API");


});


module.exports = router;
// adding this comment for no reason