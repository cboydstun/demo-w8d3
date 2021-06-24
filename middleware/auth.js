const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = function(req, res, next) {
    //get token from header
    const token = req.header('x-auth-token')

    //check if not token
    if(!token){
        return res.status(401).json({msg:"No token"})
    }

    //try catch block to get authorization
    try{
        const decoded = jwt.verify(token, config.get('JWT_SECRET'))

        req.user = decoded.user;
        next();
    }catch(err){
        res.status.json({msg:"Token not valid"})
    }
}