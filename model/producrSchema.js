const mongoose = require("mongoose");





const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter the Required Numbers"],
    trim: true,
  },

  
});

module.exports = mongoose.model("Product", productSchema);
