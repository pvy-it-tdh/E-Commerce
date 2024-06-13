const mongoose = require("mongoose");
module.exports.connect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect success");
  } catch (error) {
    console.log(error);
  }
};
