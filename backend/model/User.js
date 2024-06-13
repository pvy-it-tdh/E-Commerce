const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: String,
    profilePic: String,
    role: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("userModel", userSchema, "user");

module.exports = userModel;
