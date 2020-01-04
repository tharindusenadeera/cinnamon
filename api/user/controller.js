const { create, getUserByEmail } = require('../user/service');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require("jsonwebtoken");
const dotenv  = require('dotenv');
dotenv.config();

module.exports = {
    createUser : (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, result) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    error: true,
                    message: "Database Connection Error !"
                });
            } else {
                return res.status(200).json({
                    error: false,
                    message: "Successfully Registered"
                });
            }
        })
    },

    userLogin : (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, result) => {
            if(err){
                return res.status(500).json({
                    error: true,
                    message: "Database Connection Error !"
                })
            } else if(!result) {
                return res.status(400).json({
                    error: true,
                    message: "Invalid Email or Password"
                })
            } else {
                const results = compareSync(body.password, result.password);
                if (results){
                    result.password = undefined;
                    const jsonToken = sign({ result: result}, process.env.PRIVATE_KEY, {
                        expiresIn: "1h"
                    });

                    return res.status(200).json({
                        error: false,
                        message: "Successfully LoggedIn !",
                        token: jsonToken
                    });
                } else {
                    return res.status(400).json({
                        error: true,
                        message: "Invalid username or password !"
                    })
                }
            }
        })
    }
}