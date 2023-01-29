const mongoose = require("mongoose");
const employeelog = new mongoose.Schema({
  em: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
    unique: true,
  }
});

const log = new mongoose.model("log", employeelog)
module.exports = log
