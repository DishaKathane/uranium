let axios = require("axios")


let weather = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=ab8bec86d69b46dbd7cb66fe1caa630f'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// - then change the above to get the temperature only( of London)

let tempLondon = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=ab8bec86d69b46dbd7cb66fe1caa630f'
        }
        let result = await axios(options);
        console.log(result.data.main.temp)
        
        let data = result.data.main.temp
        res.status(200).send({ msg:"Temperature of London is", data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortedCities=async function(req,res){
  try { 
      let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
     let cityArr=[];
    for(let i=0; i<cities.length; i++){
        let obj = { city:cities[i] }
    let result= await axios.get (`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=ab8bec86d69b46dbd7cb66fe1caa630f`)
    console.log(result.data.main.temp)
    obj.temp=result.data.main.temp
   cityArr.push(obj)
    
    }
    let sorted= cityArr.sort((a,b)=> {
        return a.temp-b.temp
    })
    console.log(sorted)
    res.status(500).send({status:true, msg:sorted})
}
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.weather=weather
module.exports.tempLondon=tempLondon
module.exports.sortedCities=sortedCities