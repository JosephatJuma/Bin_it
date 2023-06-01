const mongoose = require("mongoose");

const PickUpRequest = new mongoose.Schema({
  user_id: { type: String },
  location: { type: Object },
  categories: { type: Array },
  quantity: { type: Number },
});

module.exports = mongoose.model("pickup_requests", PickUpRequest);
