const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res)=>{
  Product.find((err, product)=>{
    res.json(product);
  });
});

router.get('/products/:id', (req, res)=>{
  Product.findById((err, product)=>{
    if(!product){
      res.status(404).send('No product found');
    }else{
      res.json(product);
    }
  });
});