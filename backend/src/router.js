const express = require('express');
const productController = require('./controllers/productController')

const router = express.Router();
const productMiddleware = require('./middlewares/productMiddlewares')

router.get('/api/products', productController.getAll);
router.get('/api/products/:id', productController.getOneProduct);
router.post('/api/products', productMiddleware.validadeTitle, productController.createProduct);
router.delete('/api/products/:id', productController.deleteProduct)
router.put('/api/products/:id', 
    productMiddleware.validadeTitle,
    productMiddleware.validadePrice,
    productMiddleware.validadeQuantity,
    productController.updateProduct
 )

module.exports = router
