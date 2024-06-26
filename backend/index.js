const express = require("express");
const app = express();
const cors = require("cors");
const routers = require("./routes/index");
require("dotenv").config();
const PORT = 8080 || process.env.PORT;
const database = require("./config/db");
const cookieParser = require("cookie-parser");

database.connect();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api", routers);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
