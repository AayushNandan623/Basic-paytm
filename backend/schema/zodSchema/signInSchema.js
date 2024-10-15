const zod = require("zod");

const signInSchema = zod.object({
  userName: zod.string({ required_error: "Enter valid userName" }).min(6),
  password: zod.string({ required_error: "Enter correct password" }).min(6),
});

module.exports = signInSchema;
