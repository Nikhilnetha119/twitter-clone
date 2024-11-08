// backend/controllers/tweetController.js
const Tweet = require('../models/Tweet');

exports.getTweets = async (req, res) => {
  try {
    const tweets = await Tweet.find().populate('createdBy', 'username');
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tweets' });
  }
};

exports.createTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const newTweet = await Tweet.create({ text, createdBy: req.user.userId });
    res.status(201).json(newTweet);
  } catch (error) {
    res.status(400).json({ error: 'Error creating tweet' });
  }
};
