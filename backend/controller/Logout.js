async function Logout(req, res) {
  try {
    res.clearCookies("token");

    res.json({
      message: "Logged out successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
module.exports = Logout;
