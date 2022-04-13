
const express = require('express');
const router = express.Router();
 

const BookController= require("../controllers/bookController.js")

router.post("/createBook", BookController.createBook  )


router.get("/bookList", BookController.bookList)

router.get("/getBoooksInYear", BookController.getBooksInYear)

router.get("/getParticularBooks",BookController.getParticularBooks)

router.get("/getXINRBooks",BookController.getXINRBooks)

router.get("/getRandomBooks",BookController.getRandomBooks)

router.get("/getBooksData", BookController.getBooksData)

module.exports = router;