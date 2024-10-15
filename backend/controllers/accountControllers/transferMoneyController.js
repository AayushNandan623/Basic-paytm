const { User, Account } = require("../../db");
const moneyTransferSchema = require("../../schema/zodSchema/moneyTransferSchema");

const transferMoney = async (req, res) => {
  const { success } = moneyTransferSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({ msg: "Enter valid details" });
  }
  const { payeeUserName, amount } = req.body;
  try {
    const fromUser = await Account.findOne({ userId: req.userId });
    if (amount > fromUser.balance) {
      return res.status(400).json({ msg: "Insufficient funds" });
    }
    const toUser = await User.findOne({ userName: payeeUserName });
    if (!toUser) {
      return res.status(404).json({ msg: "Unable to find payee" });
    }

    await Account.findOneAndUpdate(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    );
    await Account.findOneAndUpdate(
      {
        userId: toUser._id,
      },
      { $inc: { balance: amount } }
    );
    return res.status(200).json({ msg: "Transaction successful !!" });
  } catch (e) {
    return res.status(400).json({ msg: "Error in money transfer" });
  }
};

module.exports = transferMoney;
