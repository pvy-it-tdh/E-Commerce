const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./routes/index");
require("dotenv").config();
const PORT = 8080 || process.env.PORT;
const database = require("./config/db");
database.connect();
app.use(cors());
app.use(express.json());
app.use("/api", routers);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
