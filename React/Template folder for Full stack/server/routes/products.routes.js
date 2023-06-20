const ProductsController = require('../controllers/products.controller');
 
module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findOneSingleProduct);
    app.put('/api/products/:id/edit', ProductsController.updateProduct);
    app.delete('/api/products/:id', ProductsController.deleteProduct);
    app.post('/api/products', ProductsController.createNewProduct);
}
