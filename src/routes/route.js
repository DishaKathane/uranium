const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")



const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createBatch",batchController .createBatch )  //batch create  api answer1

router.post("/createDeveloper",batchController .createDeveloper )  //batch create  api answer2


router.get("/scholarship-developers", batchController.schollership)   //batch create  api answer3


router.get("/developers",batchController.developers)   //batch create  api answer4



module.exports = router;