import React from "react";

import "./stylesheets/loading-card.css";

const LoadingCard = ({ userCard }) => (
  <div className={userCard ? "user-load-card" : "repo-load-card"}>
    {userCard
      ? <div className="content">
          <div className="user-avatar" />
          <div className="user-info">
            <div className="row title" />
            <div className="row user-name" />
            <div className="row title" />
            <div className="row user-bio" />
          </div>
        </div>
      : <div className="content">
          <div className="row repo-name" />
          <div className="row repo-description" />
          <div className="row repo-created" />
          <div className="row repo-forks" />
          <div className="row repo-stars" />
        </div>}
  </div>
);

export default LoadingCard;
