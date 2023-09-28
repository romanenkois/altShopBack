const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product-routes');
const imagesRoutes = require('./routes/image-routes');


const PORT = 3000;
const URL = 'mongodb+srv://romanenkoisnot:R6e5lGLZZ4hsrBQI@cluster0.hgrf5nc.mongodb.net/altShopDB'


const app = express();
app.use(express.json());
app.use(productRoutes);
app.use(imagesRoutes);

mongoose
    .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

    app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${PORT}`);
})