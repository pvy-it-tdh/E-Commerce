const express = require("express");
const router = express.Router();
const SignUpController = require("../controller/SignUp");
const SignInController = require("../controller/SignIn");
const userDetailController = require("../controller/userDetail");
const authToken = require("../middlewares/authToken");
const Logout = require("../controller/Logout");


router.post("/signup", SignUpController);
router.post("/signin", SignInController);
router.get("/user-details", authToken, userDetailController);
router.get("/user-logout", Logout);
module.exports = router;
