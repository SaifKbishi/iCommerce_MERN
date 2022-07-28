const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res)=>{  //fetch all users by ID
  User.find((err, user)=>{
    res.json(user);
  });
});

router.get('/users/:id', (req, res)=>{  //find user by ID
  User.findById(req.params.id, (err, user)=>{
    if(!user){
      res.status(404).send('No result found');
    }else{
      res.json(user);
    }
  });
});

router.post('/users/signin', (req, res)=>{
  User.exists({username: req.body.username, password: req.body.password}, (err, result)=>{
    if(err){
      res.send(err);
    }else{
      res.send(result);
    }
  });  
});

router.post('/users', (req, res)=>{  //add new user
  let user = new User(req.body);
  // console.log('post a user', user)
  user.save()
    .then(user =>{
      res.send(user);
    })
    .catch((err)=>{
      res.status(422).send(`User add failed. Error: ${err}`);
    });
});

router.patch('/users/:id', (req, res)=>{ //update user by ID
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{
      res.json('User updated');
    })
    .catch((err)=>{
      res.status(422).send(`User update failed. Error: ${err}`);
    });
});

router.delete('/users/:id', (req, res)=>{ //delete user by ID
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

router.delete('/users/deleteall', (req, res)=>{
   User.deleteMany({});
});

module.exports = router;