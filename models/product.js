const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, "title cannot be blank"]
  },
  price:{
    type: Number,
    required: [true, "price is required"]
  },
  description:{
    type: String,
    required: [true, "description cannot be blank"]
  },
  category:{
    type: String,
    required: [true, "category is required"]
  },
  image:{
    type: String,
    required: [false, "image url cannot be empty"]
  },
  rating:{
    rate:{
      type: Number,
    },
    count:{
      type: String,
    }
  }
});

module.exports = mongoose.model('Product', productSchema);