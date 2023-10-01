const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;