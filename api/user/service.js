const pool = require('../../config/database');

module.exports = {
    create : (data, callback) => {
        const user = {
            first_name: data.first_name,
            last_name: data.last_name,
            address: data.address,
            email: data.email,
            tel_no: data.tel_no,
            password: data.password
        }
        pool.query(`INSERT INTO users SET ? `, user, (err, res) => {
            if(err){
                return callback(err);
            } else {
                return callback(null, res);
            }
        });
    },

    getUserByEmail : (data, callback) => {
        pool.query(`SELECT * FROM users WHERE email = ?`, data, (err, res) => {
            if(err){
                return callback(err);
            } else {
                return callback(null, res[0]);
            }
        });
    }
}