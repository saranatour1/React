const ProductsController = require('../controllers/products.controller');
 
module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findOneSingleProduct);
    app.post('/api/products', ProductsController.createNewProduct);
}
