const bcryptjs = require("bcryptjs");
async function SignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }

    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = bcryptjs.compare(password, user.password);
    if (checkPassword) {
    } else {
      throw new Error("Please check password");
    }
  } catch (error) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = SignInController;
