// src/components/Feed.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import "./feed.css"; // Import the CSS file

function Feed() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTweet, setNewTweet] = useState("");

  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await axios.get("/api/tweets");
        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTweets();
  }, []);

// src/components/Feed.js
const handleTweetSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("/api/tweets", { content: newTweet, username: "Nikhil"}); // change to content
    setTweets([response.data, ...tweets]);
    setNewTweet(""); // Clear input field
  } catch (error) {
    console.error("Error posting tweet:", error); 
  }
};


  return (
    <div className="feed">
      <div className="tweet-input">
        <form onSubmit={handleTweetSubmit}>
          <textarea
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
            placeholder="What's happening?"
            rows="3"
            required
          />
          <button type="submit">Tweet</button>
        </form>
      </div>

      {loading ? (
        <p>Loading tweets...</p>
      ) : (
        <div className="tweets-list">
          {tweets.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
