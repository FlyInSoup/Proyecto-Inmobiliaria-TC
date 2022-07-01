const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//load env variables
dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

const app = express();

//body parser
app.use(express.json());

//enable cors
app.use(cors());

//routes
app.use('/api/v1/stores', require('./routes/stores'));
app.use('/api/v1/localidades', require('./routes/localidades'));
app.use('/api/v1/domicilios', require('./routes/domicilios'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));