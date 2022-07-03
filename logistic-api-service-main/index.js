require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const bidRoutes = require('./routes/bidRoutes');
const carrierRoutes = require('./routes/carrierRoutes');
const cityRoutes = require('./routes/cityRoutes');
const loadRoutes = require('./routes/loadRoutes');
const tripRoutes = require('./routes/tripRoutes');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());
app.use('/bid', bidRoutes)
app.use('/carrier', carrierRoutes)
app.use('/city', cityRoutes)
app.use('/load', loadRoutes)
app.use('/trip', tripRoutes)
app.use('/user', userRoutes)
app.use('/vehicle', vehicleRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server Started at ${3000}`)
})