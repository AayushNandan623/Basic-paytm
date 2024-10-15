const zod = require("zod");

const moneyTransferSchema = zod.object({
  payeeUserName: zod.string({ required_error: "Enter valid userName" }),
  amount: zod.number({ required_error: "Enter valid amount" }).positive(),
});

module.exports = moneyTransferSchema;
