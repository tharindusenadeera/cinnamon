const { checkToken } = require("../../auth/tokenValidation");
const bookingRoutes = require('express').Router();
const { getAllBookings, getBookingById } = require("../booking/controller");

//Booking routes
bookingRoutes.get('/bookings', checkToken, getAllBookings);
bookingRoutes.get('/booking/:id', checkToken, getBookingById);

module.exports = bookingRoutes;
