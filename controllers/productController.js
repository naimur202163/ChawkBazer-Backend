const Product = require("../model/producrSchema");

exports.getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.find({});

    // Total Page

    res.status(200).json({
      success: true,
      message: "Product load successfully",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      message: "Product added Successfully",
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    let product = await Product.findOne({ _id: req.params.id });
    res.status(201).json({
      success: true,
      message: "Single Product Loaded",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    let product = await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfuly",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

// exports.updateProducts=async(req,res)=>{
//   let product=
// }

// Testing Something With Query
exports.getQuery = async (req, res) => {
  console.log(req.query.name);
  res.status(200).json({
    success: true,
    message: "Rony",
  });
};

console.log("Naimur Rhman D ");

// ---------------------------------------///

// exports.getAllProducts = async (req, res, next) => {
//   try {
//     let products = await Product.find();
//     res.status(200).json({
//       success: true,
//       message: "Product load successfully",
//       products,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Something went wrong");
//   }
// };

/////////////-////////////////////
