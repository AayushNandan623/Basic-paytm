const express = require("express");
require("dotenv").config();
const app = express();
const apiRouter = require("./routes/index");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log("Server is running.....");
});
