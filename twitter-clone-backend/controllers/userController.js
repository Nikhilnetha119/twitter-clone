// backend/controllers/userController.js
const User = require('../models/User');
const Tweet = require('../models/Tweet');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ error: "User not found" });

    const tweets = await Tweet.find({ createdBy: user._id });
    res.json({ user, tweets });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching profile' });
  }
};
