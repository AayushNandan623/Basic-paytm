const express = require("express");
const signUp = require("../controllers/userControllers/signUpcontroller");
const signIn = require("../controllers/userControllers/signInController");
const jwtAuthMiddleware = require("../middlewares/authMiddleware");
const updateUserController = require("../controllers/userControllers/updateUserController");
const filerController = require("../controllers/userControllers/userFilterController");
const router = express.Router();

router.post("/signup", signUp);
router.get("/signin", signIn);
router.use(jwtAuthMiddleware);
router.get("/bulk", filerController);
router.patch("/update", updateUserController);
router.get("/data", (req, res) => {
  res.send("DATA");
});
module.exports = router;
