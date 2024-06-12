const userModel = require("../model/User");
const bcryptjs = require("bcryptjs");

async function SignUpController(req, res) {
  try {
    const { email, password, name } = req.body;
    const user = await userModel.findOne({ email });
    console.log(req.body);
    if (user) {
      throw new Error("Already user exits.");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    if (!hashPassword) {
      throw new Error("Something is wrong");
    }
    const payLoad = {
      ...req.body,
      password: hashPassword,
    };
    const userData = new userModel(payLoad);
    const saveUser = userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User create success",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = SignUpController;
