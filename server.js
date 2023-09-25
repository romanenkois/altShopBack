const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie-routes');

const PORT = 3000;
//const URL = 'mongodb://localhost:27017/moviebox';

// const URL = 'mongodb+srv://romanenkoisnot:kkF2riLPJNQPDkXY@clustermovies0.fopk0ip.mongodb.net/moviebox';
const URL = 'mongodb+srv://romanenkoisnot:R6e5lGLZZ4hsrBQI@cluster0.hgrf5nc.mongodb.net/altShopDB'


const app = express();
app.use(express.json());
app.use(movieRoutes);

mongoose
    .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

    app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${PORT}`);
})