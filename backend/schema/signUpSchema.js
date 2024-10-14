const zod = require("zod");
const signUpSchema = zod.object({
  userName: zod
    .string({ required_error: "Username is required of length at least 6." })
    .min(6),
  firstName: zod.string({ required_error: "First name is required" }).max(50),
  lastName: zod.string({ required_error: "Last name is required" }).max(50),
  password: zod
    .string({ required_error: "Password of length at least 6 required" })
    .min(6),
});

module.exports = signUpSchema;
