const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  mno: {
    type: Number,
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
    unique: true,
  },
  repass: {
    type: String,
    required: true,
    unique: true,
  },
});

const Register = new mongoose.model("Register", employeeSchema)
module.exports = Register
