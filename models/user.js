const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    firstname:{
      type: String,
      required: [true, "firstname cannot be blank"]
    },
    lastname:{
      type: String,
      required: [true, "lastname cannot be blank"]
    }
  },
  username:{
    type: String,
    required: [false, "username cannot be blank"]
  },
  password:{
    type: String,
    required: [false, "password cannot be blank"]
  },
  email:{
    type: String,
    required: [true, "Email address is required"],
    trim: true,
    lowercase: true,
    unique: true,
  },
  image:{
    type: String,
    required: [false, "image url can be empty"]
  },
  address:{
    country:{
      type: String,
    },
    city:{
      type: String,
    },
    street:{
      type: String,
    },
    number:{
      type:Number,
    },
    zipcode:{
      type: String,
    }
  }
});

module.exports = mongoose.model('User', userSchema);