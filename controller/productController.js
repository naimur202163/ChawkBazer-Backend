exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is now working",
  });
};
