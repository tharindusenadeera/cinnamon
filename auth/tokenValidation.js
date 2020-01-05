const { verify } = require("jsonwebtoken");
const dotenv  = require('dotenv');
dotenv.config();

module.exports = {
    checkToken : (req, res, next) => {
        const token = req.get("authorization");
        
        if(token){
           const  tokenNew = token.slice(7);
            
            verify(tokenNew, process.env.PRIVATE_KEY, (err, decoded) => {
                if(err){
                    res.json({
                        error: true,
                        message: "Invalid Token !"
                    });
                } else {
                    next();
                }
            })
        } else {
            res.status(403).json({
                error: true,
                message: "Access Denied !"
            });
        }
    }
}