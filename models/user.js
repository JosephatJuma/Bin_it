const mongoose = require("mongoose");
const User = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone_number: { type: String },
  password: { type: String },
  verified: { type: Boolean },
});

module.exports = mongoose.model("user", User);
