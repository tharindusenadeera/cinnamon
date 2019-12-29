const express = require('express');
const dotenv  = require('dotenv');

const app = express();
dotenv.config();


//import routes
const authRoutes = require("./routes/auth");

//Route middlewares
app.use('/api/auth', authRoutes);

app.listen(process.env.SERVER_PORT, () => console.log(`Server is up and running ${process.env.SERVER_PORT}`));