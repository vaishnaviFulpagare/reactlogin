// const { String } = require("joi");
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const userSchema =  mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("registration", userSchema);
