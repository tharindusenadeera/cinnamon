const pool = require('../../config/database');

module.exports = {

    getProducts : (callback) => {
        pool.query(`SELECT * FROM products`, (err, res) => {
            if(err){
                return callback(err);
            } else {
                return callback(res)
            }
        });
    },

    getProduct : (data, callback) => {
        pool.query(`SELECT * FROM products where id = ?`, data, (err, res) => {
            if(err){
                return callback(err);
            } else {
                return callback(res)
            }
        });
    }
}