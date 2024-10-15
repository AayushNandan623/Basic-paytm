const express = require("express");
const jwtAuthMiddleware = require("../middlewares/authMiddleware");
const getBalanceController = require("../controllers/accountControllers/getBalanceContorller");
const transferMoney = require("../controllers/accountControllers/transferMoneyController");
const accountRouter = express.Router();

accountRouter.use(jwtAuthMiddleware);
accountRouter.get("/balance", getBalanceController);
accountRouter.patch("/transfer", transferMoney);

module.exports = accountRouter;
