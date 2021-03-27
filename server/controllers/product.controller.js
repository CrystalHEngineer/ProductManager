const Product = require('../models/product.model');

module.exports = {
    create: (req, res) => {
        console.log(req.body);

        Product.create(req.body)
            .then((newProduct) => {
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("Error found in create.");
                console.log(err);
                res.json(err);
            });
    },

    getAll: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("Error found in getAll.")
                console.log(err);
                res.json(err);
            });
    },
}