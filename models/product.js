const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: String,
    image: String,
    images: [String],
    sizeAndQuantity: {
        s : Number,
        m : Number,
        l : Number,
        xl : Number,
        xxl : Number,
        xxxl : Number,
        universal : Number
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;