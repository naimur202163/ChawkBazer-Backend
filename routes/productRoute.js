const express = require("express");
const {
  getAllProducts,
  createProduct,
  getQuery,
  getSingleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/products/:id").get(getSingleProduct);
router.route("/rony").get(getQuery);

module.exports = router;
