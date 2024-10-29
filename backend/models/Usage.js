// backend/models/Usage.js

const mongoose = require('mongoose');

const UsageSchema = new mongoose.Schema({
  IND_ID: { type: String, required: true },
  couponIndex: { type: Number, required: true }, // 0 to 8 (for coupons 1 to 9)
  timestamp: { type: Date, default: Date.now },
  mealCategory: { type: String, required: true }
});

module.exports = mongoose.model('Usage', UsageSchema);
