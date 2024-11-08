// routes/profile.js
const express = require("express");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

const router = express.Router();

// Fetch Profile Data
router.get("/user/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const tweets = await Tweet.find({ username: req.params.username }).sort({ createdAt: -1 });
    res.json({ user, tweets });
  } catch (error) {
    res.status(500).json({ error: "Error fetching profile" });
  }
});

module.exports = router;
