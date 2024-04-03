const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");
function authMiddleware(req, res, next) {
  const jwtString = req.headers.authorization;
  console.log(jwtString);
  if (!jwtString || !jwtString.startsWith("Bearer ")) {
    res.status(403).json({ message: "Invalid User" });
  }
  const arr = jwtString.split(" ");
  const token = arr[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.userId = decoded.uerId;
    next();
  } catch (error) {
    res.status(403).json({ message: "Error occured" });
  }
}

module.exports = authMiddleware;
