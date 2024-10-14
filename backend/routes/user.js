const express = require("express");
const signUp = require("../controllers/signUpController");
const signIn = require("../controllers/signInController");
const jwtAuthMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/signup", signUp);
router.get("/signin", signIn);
router.get("/data", jwtAuthMiddleware, (req, res) => {
  res.send("DATA");
});
module.exports = router;
