const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/paytm");
    console.log("Connected to db ... ");
  } catch (e) {
    console.log("Error message : ", error.message);
  }
};
connection();
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
  },
});

const accountSchema = new mongoose.Schema({
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});
const User = new mongoose.model("User", userSchema);

const Account = new mongoose.model("Account", accountSchema);

module.exports = { User, Account };
