const app = require("./app");
const connectDatabase = require("./config/database");
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

// Database Connection
connectDatabase();




app.listen(process.env.PORT, () => {
  console.log(`Server is  running on Port htpss:localhost:${process.env.PORT}`);
});
