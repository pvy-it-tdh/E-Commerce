const userModel = require("../model/User");
async function userDetailController(req, res) {
  try {
    console.log("userID", req.userId);
    const user = await userModel.findById(req.userId);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
module.exports = userDetailController;
