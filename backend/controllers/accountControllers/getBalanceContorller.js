const { Account } = require("../../db");

const getBalanceController = async (req, res) => {
  try {
    const userAccountDetails = await Account.findOne({ userId: req.userId });
    if (!userAccountDetails) {
      return res.status(404).json({ msg: "No user found" });
    }
    res.status(200).json({ balance: userAccountDetails.balance });
  } catch (e) {
    res.status(401).json({ msg: "error finding user" });
  }
};

module.exports = getBalanceController;
