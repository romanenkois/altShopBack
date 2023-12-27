const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    adress: {
        type: Number,
        required: true,
    },
    delivered: {
        type: Boolean,
        required: true,
    },
    order: {
        type: [String],
        required: true
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;