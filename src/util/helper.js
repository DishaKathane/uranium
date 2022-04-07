const today = new Date()
const printDate = () =>{
    console.log("current date is:" + today.getDate())
}

const printMonth = () =>{
    console.log("current month is:" + today.getMonth())
}

const getBatchInfo = () =>{
    console.log("Uranium Week3 Day3,the topic being taught today is node js , npn and modules and package.json. For example - Uranium, W3D3, the topic for today is Nodejs module system ")
}

module.exports = {printDate,printMonth,getBatchInfo}