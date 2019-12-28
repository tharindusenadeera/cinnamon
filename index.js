const express = require('express');
const app = express();


//import routes
const authRoutes = require("./routes/auth");

//Route middlewares
app.use('api/auth', authRoutes);

app.listen(5000, () => console.log('Server is up and running'));