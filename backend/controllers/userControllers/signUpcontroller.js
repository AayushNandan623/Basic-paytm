require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const { User, Account } = require("../../db");
const jwt = require("jsonwebtoken");
const signUpSchema = require("../../schema/zodSchema/signUpSchema");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  const userDetails = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  };
  const parsedOutput = signUpSchema.safeParse(userDetails);
  if (parsedOutput.success) {
    try {
      const user = await User.findOne({ userName: userDetails.userName });
      if (user) {
        res.status(411).json({ msg: "username already exists" });
      } else {
        try {
          const hashedPassword = await bcrypt.hash(userDetails.password, 10);
          const newUser = await User.create({
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
          });
          await Account.create({
            userId: newUser._id,
            balance: Math.floor(1 + Math.random() * 10000),
          });
          const jwtToken = jwt.sign(
            { userName: userDetails.userName, _id: newUser._id },
            JWT_SECRET
          );
          res.status(200).json({ msg: "New user created", token: jwtToken });
        } catch (e) {
          console.log("Error creating new user : ", e);
        }
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  } else {
    res.status(411).json({ msg: "invalid data sent" });
  }
};

module.exports = signUp;
