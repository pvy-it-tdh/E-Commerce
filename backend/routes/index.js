const express = require("express");
const routers = express.Router();
const SignUpController = require("../controller/SignUp");
routers.post("/signup", SignUpController);
routers;
module.exports = routers;
