// src/components/WhoToFollow.js
import React from "react";
import "./RightSidebar.css";

const WhoToFollow = () => {
  const users = [
    { username: "john_doe", displayName: "John Doe" },
    { username: "jane_smith", displayName: "Jane Smith" },
    { username: "mike_jones", displayName: "Mike Jones" },
  ];

  return (
    <div className="who-to-follow">
      <h3>Who to Follow</h3>
      {users.map((user) => (
        <div key={user.username} className="user-suggestion">
          <div className="user-info">
            <span className="display-name">{user.displayName}</span>
            <span className="username">@{user.username}</span>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default WhoToFollow;
 