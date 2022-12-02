const express = require("express");
const {
  getAllProducts,
  createProduct,
  getQuery,
  getSingleProduct,
  deleteProducts,
} = require("../controllers/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/products/:id").get(getSingleProduct).delete(deleteProducts).put();
router.route("/rony").get(getQuery);

module.exports = router;
