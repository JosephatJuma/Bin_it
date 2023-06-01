const mongoose = require("mongoose");

const PickUpRequest = new mongoose.Schema({
  user_id: { type: String },
  location: { type: Object },
  categories: { type: Array },
  quantity: { type: Number },
  confirmed: { type: Boolean, default: false },
  pending: { type: Boolean, default: true },
});

module.exports = mongoose.model("pickup_requests", PickUpRequest);
