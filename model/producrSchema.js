const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter the Required Numbers"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Enter the Product Description"],
  },
  slug: {
    type: String,
    required: [true, "Enter the Slug"],
  },
  images: {
    thumbnail: {
      type: String,
      required: ["Enter Image Thumbnial"],
    },
    original: {
      type: String,
      required: ["Enter the Images"],
    },
  },

  gallery: [
    {
      thumbnail: {
        type: String,
      },
      original: {
        type: String,
      },
    },
  ],
  price: {
    type: Number,
    required: [true, "Enter the Produt Price"],
  },
  sale_price: {
    type: Number,
    required: [true, "Enter the Produt Sale Price"],
  },
  category: {
    type: String,
    required: [true, "Please Enter the Category"],
  },
  type: {
    type: String,
    requiredl: [true, "Please Enter the Type"],
  },
  variations: [
    {
      value: {
        type: String,
        required: [true, "Enter the Value"],
      },
      attribute: {
        name: {
          type: String,
          required: true,
        },
        slug: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
