const User = require("../model/userSchema");
exports.getAllUsers = async (req, res) => {
  res.status(200).json("Hello Wrold");
};

exports.createUser = async (req, res) => {
  try {
   
    const user = await User.create(req.body);
      res.status(200).json({
        success:true,
        message:"Product Added Successfully",
        user,
      })
  } catch (error) {
    res.status(500).json(error);
  }
};
