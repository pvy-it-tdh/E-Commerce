const express = require("express");
const router = express.Router();
const SignUpController = require("../controller/SignUp");
const SignInController = require("../controller/SignIn");
router.post("/signup", SignUpController);
router.post("/signin", SignInController);
module.exports = router;
