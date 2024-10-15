const zod = require("zod");

const updateUserSchema = zod.object({
  firstName: zod.string({ required_error: "Enter valid firstName" }).optional(),
  lastName: zod.string({ required_error: "Enter valid lastName" }).optional(),
  password: zod
    .string({ required_error: "Enter valid password" })
    .min(6)
    .optional(),
});

module.exports = updateUserSchema;
