// models/Tweet.js
const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  content: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tweet", TweetSchema);
