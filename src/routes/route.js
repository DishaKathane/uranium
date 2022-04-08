const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();

// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });
//=======================1===========================

router.get('/movies',function(req,res){
    let arr= ['rand de basnasti', 'the shining','lord of the rings', 'bartman begins'];
    console.log(arr);
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send(arr)
});

//========================2 abd 3===================================

router.get('/movies/:indexNumber', function(req, res) {
    let filmName = ['rand de basnasti', 'the shining','lord of the rings', 'bartman begins'];
    let a 
    let n = req.params.indexNumber
    for(let i=0; i<=filmName.length; i++){
        if(i < n){
            a ="you use invalid index please try again!"
        }
        if(i== n){

         a = filmName[i]

        }
       // console.log(a)
    
    }
 
    res.send(a)
});

//==================================4============================


  router.get('/film', function(req, res){

   let array = [ {
        id : 1,
        name: "The Shining"
       }, 
       {
        id : 2,
        name : "Incendies"
       },
        {
        id: 3,
        name: "Rang de Basanti"
       }, 
       {
        id: 4,
        name: "Finding Nemo"
       }]

       res.send(array)
});

//==========================5==========================


router.get('/films/:filmId', function(req, res){

    let array1 = [ {
         id : 1,
         name: "The Shining"
        }, 
        {
         id : 2,
         name : "Incendies"
        },
         {
         id: 3,
         name: "Rang de Basanti"
        }, 
        {
         id: 4,
         name: "Finding Nemo"
        }]

          let a 
    let n = req.params.filmId

    for(let i=0; i<=array1.length; i++){
        if(n > array1[i].id){
            a ="you use invalid index please try again!"
        }
        if(n== array1[i]-1){

         a = array1[i]

        }
       // console.log(a)
    
    }
 
 
        res.send(a)

    })     





module.exports = router;
// adding this comment for no reason


//www.goodle.com/?name=disha
// www.google.com/name/:name/:age