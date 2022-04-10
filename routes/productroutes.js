const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res)=>{
  Product.find((err, product)=>{
    res.json(product);
  });
});

router.get('/products/:id', (req, res)=>{
  Product.findById(req.params.id, (err, product)=>{    
    console.log('req.params._id, ', req.params.id)
    if(!product){
      res.status(404).send('No product found');
    }else{
      res.json(product);
    }
  });
});

router.post('/products', (req, res)=>{
  let product = new Product(req.body);
  product.save()
    .then(product =>{
      res.send(product);
    })
    .catch((err)=>{
      res.status(422).send(`Product add failed. Error:${err}`);
    });
});

router.patch('/products/:id', (req, res)=>{
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.json('Product updated');
    })
    .catch((err)=>{
      res.status(422).send(`Product update failed. Error:${err}`);
    });
});

router.delete('/products/:id', (req,res)=>{
  Product.findById(req.params.id, (err, product)=>{
    if(!product){
      res.status(404).send('Product not found');
    }else{
      Product.findByIdAndRemove(req.params.id)
        .then(()=>{res.status(200).json('Product deleted')})
        .catch((err)=>{
          res.status(400).send(`Product delte failed. Error: ${err}`);
        })
    }
  })
});

module.exports = router;