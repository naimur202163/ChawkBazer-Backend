const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());

// Routes Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);
app.use(bodyParser.json());

module.exports = app;
