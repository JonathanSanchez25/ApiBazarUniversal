const express = require("express");
const productSchema = require("../models/product");

const router = express.Router();



// get all products por nombre
router.get("/product", (req, res) => {
    productSchema.find()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

// get all products por title, marca o category  que tengan semenjanzas o incluyan la palabra
router.get("/product/find", (req, res) => {
    const {title} = req.query;
    productSchema.find(or = [{title: {$regex: title, $options: 'i'}}, {brand: {$regex: title, $options: 'i'}}, {category: {$regex: title, $options: 'i'}}])
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

//get por id product
router.get("/product/:id", (req, res) => {
    const {id} = req.params;
    productSchema.findById(id)
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
});

module.exports = router;


