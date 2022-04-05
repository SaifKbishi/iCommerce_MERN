const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routerUser = require('./routes/userroutes');
const routerProduct = require('./routes/productroutes');

const ecomapp = express();
const PORT= 3001;
const MONGODB_URI = 'mongodb+srv://firstUser:FG12XZ123@cluster0.y3jty.mongodb.net/mern_ecommerce?retryWrites=true&w=majority';

ecomapp.use(cors());
ecomapp.use(express.urlencoded({extended: true}));
ecomapp.use(express.json());
ecomapp.use('/v2', routerUser);
ecomapp.use('/v3', routerProduct);

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
mongoose.connection.once('open',()=>{
  console.log('Connected to DB')
});

mongoose.connection.on('error', (error)=>{
  console.log('Mongoose connection Error: ', error);
});


ecomapp.get('/', (req, res)=>{res.send('Howdy from mern_ecommerce')});

ecomapp.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`);
});

