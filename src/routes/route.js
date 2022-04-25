const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController=require("../controllers/weathercontroller")
const MemesController=require("../controllers/memesController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrict", CowinController.getDistrict)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/weather/london",WeatherController.weather)

router.get("/temp/london",WeatherController.tempLondon)
router.get("/cities/sort",WeatherController.sortedCities)
router.get("/getmeme",MemesController.getMeme)
router.post("/postMeme",MemesController.memePost)

module.exports = router;