const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publish = req.body
    let publisherCreated = await PublisherModel.create(publish)
    res.send({data: publisherCreated})
}

module.exports.createPublisher= createPublisher

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }


// module.exports.getAuthorsData= getAuthorsData