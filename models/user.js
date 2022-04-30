const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname:{
    type: String,
    required: [true, "firstname cannot be blank"]
  },
  phonenumber:{
    type: String,
    // required: [true, "Phone number is required"],
  },
  email:{
    type: String,
    required: [true, "Email address is required"],
    trim: true,
    lowercase: true,
    // unique: true,
  },
  image:{
    type: String,
    required: [false, "image url can be empty"]
  },
  address:{
    type: String,
  },
  username:{
    type: String,
    required: [false, "username cannot be blank"]
  },
  password:{
    type: String,
    required: [false, "password cannot be blank"]
  },
});

module.exports = mongoose.model('User', userSchema);