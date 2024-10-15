const { User, Account } = require("../../db");
const mongoose = require("mongoose");
const moneyTransferSchema = require("../../schema/zodSchema/moneyTransferSchema");

const transferMoney = async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { success } = moneyTransferSchema.safeParse(req.body);
    if (!success) {
      await session.abortTransaction();
      return res.status(411).json({ msg: "Enter valid details" });
    }
    const { payeeUserName, amount } = req.body;
    try {
      const fromUser = await Account.findOne({ userId: req.userId }).session(
        session
      );
      if (amount > fromUser.balance) {
        await session.abortTransaction();
        return res.status(400).json({ msg: "Insufficient funds" });
      }
      const toUser = await User.findOne({ userName: payeeUserName }).session(
        session
      );
      if (!toUser) {
        await session.abortTransaction();
        return res.status(404).json({ msg: "Unable to find payee" });
      }

      await Account.findOneAndUpdate(
        { userId: req.userId },
        { $inc: { balance: -amount } }
      ).session(session);
      await Account.findOneAndUpdate(
        {
          userId: toUser._id,
        },
        { $inc: { balance: amount } }
      ).session(session);
      await session.commitTransaction();
      return res.status(200).json({ msg: "Transaction successful !!" });
    } catch (e) {
      await session.abortTransaction();
      return res.status(400).json({ msg: `Error in money transfer ${e}` });
    }
  } catch (e) {
    return res.status(400).json({ msg: `Error in transaction ${e}` });
  }
};

module.exports = transferMoney;
