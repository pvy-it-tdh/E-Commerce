async function userDetailController(req, res) {
  try {
    console.log("userID", req.userId);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
module.exports = userDetailController;
