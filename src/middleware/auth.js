const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}