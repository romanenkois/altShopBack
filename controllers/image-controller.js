const Image = require('../models/image');

const handleError = (res, error) => {
    res.status(500).json({ error });
}

const getImages = (req, res) => {
    Image
    .find()
    .then((images) => {
        res
            .status(200)
            .json(images);
    })
    .catch((err) => handleError(res, err));
}

const getImage = (req, res) => {
    Image
    .findById(req.params.id)
    .then((image) => {
        res
            .status(200)
            .json(image);
    })
    .catch((err) => handleError(res, err));
}

const deleteImage = (req, res) => {
    Image
    .findByIdAndDelete(req.params.id)
    .then((result) => {
        res
            .status(200)
            .json(result);
    })
    .catch((err) => handleError(res, err));
}

const addImage = (req, res) => {
    const image = new Image(req.body);
    image
    .save()
    .then((result) => {
        res
            .status(201)
            .json(result);
    })
    .catch((err) => handleError(res, err));
}

const updateImage = (req, res) => {
    Image
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res
            .status(200)
            .json(result);
    })
    .catch((err) => handleError(res, err));
}

module.exports = {
    getImages,
    getImage,
    deleteImage,
    addImage,
    updateImage
};