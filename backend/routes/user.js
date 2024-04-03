const express = require("express");
const router = express.Router();
const z = require("zod");
const User = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const zodSchemaSignUp = z.object({
  userName: z
    .string({
      required_error: "Username should be at least 6 characters.",
    })
    .email()
    .min(6),
  firstName: z.string({ require_error: "Enter valid name" }).max(50),
  lastName: z.string({ require_error: "Enter valid name" }).max(50),
  password: z
    .string({
      require_error: "Password should be at least 6 characters.",
    })
    .min(6),
});
const zodSchemaSignIn = z.object({
  userName: z
    .string({
      required_error: "Username should be at least 6 characters.",
    })
    .email(),
  password: z.string({
    require_error: "Password should be at least 6 characters.",
  }),
});

router.post("/signup", async (req, res) => {
  const userDetails = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  };

  const parsedOutput = zodSchemaSignUp.safeParse(userDetails);
  if (parsedOutput.success) {
    const user = await User.findOne({ userName: userDetails.userName });
    if (user._id) {
      res
        .status(411)
        .json({ message: "Email already taken / Incorrect inputs" });
    } else {
      const newUser = await User.create(userDetails);
      const jwtToken = jwt.sign({ userId: newUser._id }, JWT_SECRET);
      res.status(200).json({
        message: "User created successfully",
        token: jwtToken,
      });
    }
  } else {
    res.status(411).json({
      message: "Incorrect input provided",
    });
  }
});

router.post("/signin", async (req, res) => {
  const userDetails = {
    userName: req.body.userName,
    password: req.body.password,
  };
  console.log(userDetails);
  const parsedOutput = zodSchemaSignIn.safeParse(userDetails);
  console.log(parsedOutput);
  if (parsedOutput.success) {
    const user = await User.findOne({
      userName: userDetails.userName,
      password: userDetails.password,
    });
    if (user._id) {
      const jwtToken = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.status(200).json({ token: jwtToken });
    } else {
      res.status(411).json({
        message: "Error while logging in",
      });
    }
  } else {
    res.status(411).json({
      message: "Incorrect input provided",
    });
  }
});
module.exports = router;
