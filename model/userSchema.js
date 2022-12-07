const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter User Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter The Password"],
  },
  password: {
    type: String,
    required: [true, "Plase Enter the Passwords"],
  },
});

module.exports = mongoose.model("User", userSchema);
