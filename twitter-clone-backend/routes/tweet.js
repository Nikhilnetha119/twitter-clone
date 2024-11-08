// routes/tweet.js
const express = require("express");
const Tweet = require("../models/Tweet");

const router = express.Router();

// Fetch Tweets
router.get("/tweets", async (req, res) => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tweets" });
  }
});

// Create Tweet
router.post("/tweets", async (req, res) => {
  const { content, username } = req.body;

  try {
    const newTweet = new Tweet({ content, username });
    await newTweet.save();
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(400).json({ error: "Error creating tweet" });
  }
});

module.exports = router;
 