// src/components/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "./Tweet";
import { useParams } from "react-router-dom";
import "./profile.css";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);
  const [activeTab, setActiveTab] = useState("tweets");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const userProfile = await axios.get(`/api/user/${username}`);
        setUser(userProfile.data.user);
        setTweets(userProfile.data.tweets);
      } catch (error) {
        setError("Error fetching profile");
        console.error("Error fetching profile:", error);
      }
    }
    fetchProfile();
  }, [username]);

  if (error) {
    return <div className="profile-error">{error}</div>;
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <img src="https://cdn.britannica.com/52/252752-050-2E120356/Cricketer-Rohit-Sharma-2023.jpg" alt="Profile" className="profile-pic" />
        <h1 className="profile-username">{user.username}</h1>
        <p className="profile-bio">{user.bio}</p>
        <div className="profile-stats">
          <span>{user.followers || 0} Followers</span> • <span>{user.following || 0} Following</span>
        </div>
      </div>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab("tweets")} className={activeTab === "tweets" ? "active" : ""}>
          Tweets
        </button>
        <button onClick={() => setActiveTab("Replies")} className={activeTab === "Replies" ? "active" : ""}>
          Replies
        </button>
        <button onClick={() => setActiveTab("likes")} className={activeTab === "likes" ? "active" : ""}>
          Likes
        </button>
        <button onClick={() => setActiveTab("media")} className={activeTab === "media" ? "active" : ""}>
          Media
        </button>

      </div>

      <div className="profile-content">
        {activeTab === "tweets" && ( 
          <div className="user-tweets">
            <p>Tweets content here...</p>
            {tweets.map((tweet) => (
              // Ensure to use _id as the unique key for each tweet
              <Tweet key={tweet._id} tweet={tweet} />
            ))}
          </div>
        )}
        {activeTab === "likes" && <p>Likes content here...</p>}
        {activeTab === "media" && <p>Media content here...</p>}
        {activeTab === "Replies" && <p>Replies content here...</p>}
      </div>
    </div>
  );
}

export default Profile;
