const pool = require('../../config/database');

module.exports = {

    getBookings : (callback) => {
        pool.query(`SELECT * FROM bookings`, (err, res) => {
            if(err){
                return callback(err);
            } else {
                return callback(res)
            }
        })
    }, 

    getBooking : (data, callback) => {
        pool.query(`SELECT * FROM bookings WHERE id = ?`, data, (err, res) => {
            if(err){
                return callback(err);
            } else{
                return callback(null, res);
            }
        })
    }
}