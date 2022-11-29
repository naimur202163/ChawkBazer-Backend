const Product = require("../model/producrSchema");

exports.getAllProducts = async (req, res, next) => {
  let products = await Product.find();
  res.status(200).json({
    success: true,
    message: "Product load successfully",
    products,
  });
};

// console.log()

// console.log("Hello Fro");

//

exports.getQuery = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Rony",
  });
};

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    message: "Product added Successfully",
    success: true,
    product,
  });
};

exports.getSingleProduct = async (req, res) => {
  let product = await Product.findOne({ _id: req.params.id });

  res.status(201).json({
    success: true,
    message: "Single Product Loaded",
    product,
  });
};
