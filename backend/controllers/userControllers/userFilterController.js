const { User } = require("../../db");

const filerController = async (req, res) => {
  const parameter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: parameter,
        },
        lastName: {
          $regex: parameter,
        },
      },
    ],
  });

  res.status(200).json({
    user: users.map((user) => ({
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
};

module.exports = filerController;
