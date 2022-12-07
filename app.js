const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(bodyParser.json());

// Routes Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

module.exports = app;
