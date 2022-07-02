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

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api/v1/localidades', require('./routes/localidades'));
app.use('/api/v1/domicilios', require('./routes/domicilios'));
app.use('/api/v1/propiedades', require('./routes/propiedades'));
app.use('/api/v1/pagos', require('./routes/pagos'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
