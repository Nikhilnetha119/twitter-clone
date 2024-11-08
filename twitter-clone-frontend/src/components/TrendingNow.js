// src/components/TrendingNow.js
import React from "react";
import "./RightSidebar.css";

const TrendingNow = () => {
  const trends = [
    { topic: "#ReactJS", tweets: "120K Tweets" },
    { topic: "#JavaScript", tweets: "90K Tweets" },
    { topic: "#WebDevelopment", tweets: "60K Tweets" },
  ];

  return (
    <div className="trending-now">
      <h3>What's Trending</h3>
      {trends.map((trend, index) => (
        <div key={index} className="trend-item">
          <span className="trend-topic">{trend.topic}</span>
          <span className="tweet-count">{trend.tweets}</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingNow;
