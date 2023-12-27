const express = require('express');
const {
    getImages,
    getImage,
    getImageRaw,
    deleteImage,
    addImage,
    updateImage
} = require('../controllers/image-controller');

const router = express.Router();

router.get('/images/', getImages);
router.get('/images/:id', getImage);
router.get('/image/:id', getImageRaw);
router.delete('/images/:id', deleteImage);
router.post('/images', addImage);
router.patch('/images/:id', updateImage);

module.exports = router;