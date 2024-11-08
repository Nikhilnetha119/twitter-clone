// src/components/Tweet.js
import React from "react";
import "./tweet.css"; // Import the CSS file for styling

function Tweet({ tweet }) {
  const { username, content, createdAt, avatarUrl } = tweet;

  return (
    <div className="tweet">
      <div className="tweet-header">
        <img
          src={avatarUrl || "https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg"}
          alt={`${username}'s avatar`}
          className="tweet-avatar"
        />
        <div className="tweet-info">
          <h4 className="tweet-username">{username}</h4>
          <p className="tweet-timestamp">{new Date(createdAt).toLocaleString()}</p>
        </div>
      </div>
      <p className="tweet-content">{content}</p>
      <div className="tweet-actions">
        <button className="tweet-button">Like</button>
        <button className="tweet-button">Retweet</button>
      </div>
    </div>
  );
}

export default Tweet;
