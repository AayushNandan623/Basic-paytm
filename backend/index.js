const express = require("express");
const app = express();
const apiRouter = require("./routes/index");
const PORT = 3000;
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/api/v1", apiRouter);

app.listen(PORT, () => {
  console.log("Server is running.....");
});
