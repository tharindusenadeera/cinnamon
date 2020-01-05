const { checkToken } = require("../../auth/tokenValidation");
const router = require('express').Router();
const { getAllBookings, getBookingById } = require("../booking/controller");

//Booking routes
router.get('/bookings', checkToken, getAllBookings);
router.get('/booking/:id', checkToken, getBookingById);
