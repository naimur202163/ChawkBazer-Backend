const app = require("./app");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.listen(process.env.PORT, () => {
  console.log(`Server is  running on Port htpss:localhost:${process.env.PORT}`);
});
