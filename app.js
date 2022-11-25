const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// Middleweare
app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

// Routes Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);






module.exports = app;
