const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const accountRouter = require("./accountRoute");

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;
