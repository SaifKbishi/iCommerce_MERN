const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res)=>{
  User.find((err, user)=>{
    res.json(user);
  });
});

router.get('/users/:id', (req, res)=>{
  User.findById(req.params.id, (err, user)=>{
    if(!user){
      res.status(404).send('No result found');
    }else{
      res.json(user);
    }
  });
});

router.post('/users', (req, res)=>{
  let user = new User(req.body);
  user.save()
    .then(user =>{
      res.send(user);
    })
    .catch((err)=>{
      res.status(422).send(`User add failed. Error: ${err}`);
    });
});

router.patch('/users/:id', (req, res)=>{
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.json('User updated');
    })
    .catch((err)=>{
      res.status(422).send(`User update failed. Error: ${err}`);
    });
});

router.delete('/users/:id', (req, res)=>{
  User.findById(req.params.id, (err, user)=>{
    if(!user){
      res.status(404).send('User not found');
    }else{
      User.findByIdAndRemove(req.params.id)
        .then(()=>{res.status(200).json('User deleted')})
        .catch((err)=>{
          res.status(400).send(`User delete failed, ${err}`);
        })
    }
  })
});

module.exports = router;