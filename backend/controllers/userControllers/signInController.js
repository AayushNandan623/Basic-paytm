const { User } = require("../../db");
const signInSchema = require("../../schema/zodSchema/signInSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const signIn = async (req, res) => {
  const userInput = {
    userName: req.query.userName,
    password: req.query.password,
  };
  const parsedOutput = signInSchema.safeParse(userInput);
  console.log(userInput);
  if (parsedOutput.success) {
    try {
      const userD = await User.findOne({
        userName: userInput.userName,
      });
      if (userD) {
        try {
          const passwordVerification = await bcrypt.compare(
            userInput.password,
            userD.password
          );
          if (passwordVerification) {
            const jwtToken = jwt.sign(
              { userName: userD.userName, _id: userD._id },
              process.env.JWT_SECRET
            );
            res.status(200).json({ token: jwtToken });
          } else {
            res.status(400).json({ msg: "Incorrect password" });
          }
        } catch (e) {
          console.log("Error signing jwt :", e);
          res.status(400).json({ msg: "Internal Error" });
        }
      }
    } catch (e) {
      console.log("Error finding user : ", e);
      res.status(400).json({ msg: "Internal Error" });
    }
  } else {
    res.status(411).json({ msg: "Invalid inputs" });
  }
};

module.exports = signIn;
