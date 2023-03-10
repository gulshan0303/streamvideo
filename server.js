const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./routes/authRoutes');
const streamRoutes = require('./routes/streamRoutes')
const bodyParser = require('body-parser');
const dbConnection = require('./config/dbConnection');
const app = express();
const port = process.env.PORT || 3000

//middleware

// Parse incoming request bodies as JSON
app.use(bodyParser.json());
// Parse incoming request bodies as URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())


// api routes

app.use('/api/v1/auth',userRoutes)
app.use('/api/v1/stream',streamRoutes);


//database connection
dbConnection();

app.listen(port, () => console.log(`Server running on port ${port}`));