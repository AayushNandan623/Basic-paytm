const updateUserSchema = require("../../schema/zodSchema/updateUserSchema");
const { User } = require("../../db");
const updateUserController = async (req, res) => {
  const validation = updateUserSchema.safeParse(req.body);
  if (!validation.success) {
    res.status(411).json({ msg: "Incorrect input provided" });
  }
  try {
    const updatedUserData = await User.findOneAndUpdate(
      { _id: req.userId },
      req.body,
      { new: true }
    );
    console.log(updatedUserData);
    res.status(200).json({ msg: "User Updated" });
  } catch (e) {
    console.log("error finding and updating user data ", e);
    es.status(411).json({ msg: "Error finding and updating user data" });
  }
};

module.exports = updateUserController;
