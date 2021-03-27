const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductController.create);
    app.get('/api/product', ProductController.getAll);
}