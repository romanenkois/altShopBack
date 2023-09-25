const express = require('express');
const {
    getProducts,  
    getProduct,
    deleteProduct,
    addProduct,
    updateProduct
} = require('../controllers/product-controller');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.delete('/products/:id', deleteProduct);
router.post('/products', addProduct);
router.patch('/products/:id', updateProduct);

module.exports = router;