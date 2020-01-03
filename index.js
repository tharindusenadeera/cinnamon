const express = require('express');
const dotenv  = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
//import routes
const userRoutes = require("./api/user/router");

//Route middlewares
app.use('/api', userRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`Server is up and running ${process.env.SERVER_PORT}`));