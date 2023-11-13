const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discountPercentage: {
        type: Number,
        min: 0,
        max: 100
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    }
});


module.exports = mongoose.model('Product', productSchema);