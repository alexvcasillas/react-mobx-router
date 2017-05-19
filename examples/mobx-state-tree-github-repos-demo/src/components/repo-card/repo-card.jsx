import React from "react";

import Language from "../language/language";

import "./stylesheets/repo-card.css";

const RepoCard = ({ repo }) => (
  <div className="repo-card">
    <div className="content">
      <div className="row repo-name">
        <strong><Language resource="REPO.NAME" />: </strong>
        {repo.name}
      </div>
      <div className="row repo-description">
        <strong><Language resource="REPO.DESCRIPTION" />: </strong>
        {repo.description}
      </div>
      <div className="row repo-created">
        <strong><Language resource="REPO.CREATED_AT" />: </strong>
        {repo.created_at}
      </div>
      <div className="row repo-forks">
        <strong><Language resource="REPO.FORKS" />: </strong>
        {repo.forks_count}
      </div>
      <div className="row repo-stars">
        <strong><Language resource="REPO.STARS" />: </strong>
        {repo.stargazers_count}
      </div>
    </div>
  </div>
);

export default RepoCard;
