const express = require('express');
const dotenv  = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
//import routes
const userRoutes = require("./api/user/router");
const bookingRoutes = require("./api/booking/router");

//Route middlewares
app.use('/api', userRoutes);
app.use('/api', bookingRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`Server is up and running ${process.env.SERVER_PORT}`));