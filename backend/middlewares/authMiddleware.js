const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtAuthMiddleware = async (req, res, next) => {
  const jwtString = req.headers.authorization;
  if (jwtString && jwtString.startsWith("Bearer")) {
    const jwtToken = jwtString.split(" ")[1];
    try {
      const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
      if (decoded) {
        res._id = decoded._id;
        next();
      } else {
        res.status(400).json({ msg: "Failed Authentication" });
      }
    } catch (e) {
      console.log("Error while verifying", e);
      res.status(400).json({ msg: "Incorrect Authorization headers" });
    }
  } else {
    res.status(400).json({ msg: "Incorrect Authorization headers" });
  }
};

module.exports = jwtAuthMiddleware;
