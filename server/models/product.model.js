const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title for the product."],
        minlength: [3, "Your product must be at least 3 characters long."],
    },
    price: {
        type: Number,
        required: [true, "You must have a price for a product."],
        min: [1, "Your product must be at least one dollar."]
    },
    description: {
        type: String,
        required: [true, "You must have a description for the product."],
        minlength: [10, "Your description must be at least 10 characters long."],
    }
})

module.exports = mongoose.model("Product", ProductSchema);