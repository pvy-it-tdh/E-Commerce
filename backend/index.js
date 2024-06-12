const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const routers = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routers);

// Ensure the correct port is assigned
const PORT = process.env.PORT || 8080;

// Connect to the database and then start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB");
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit the process with an error code
  });
