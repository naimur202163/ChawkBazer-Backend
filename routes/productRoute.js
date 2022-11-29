const express = require("express");
const { getAllProducts } = require("../controllers/productController");

const router = express.Router();

router.route("/product/new").get(getAllProducts);

module.exports = router;
