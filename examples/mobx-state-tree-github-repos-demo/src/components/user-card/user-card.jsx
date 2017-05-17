import React from 'react';

import Language from '../language/language';

import './stylesheets/user-card.scss';

const UserCard = ({ user }) => (
  <div id="UserCard">
    <div className="content">
      <div className="user-avatar">
        <img src={user.avatar} role="presentation" />
      </div>
      <div className="user-info">
        <div className="row user-name">
          <strong><Language resource="USER.NAME" /></strong>
          {user.name ? user.name : <Language resource="USER.NO_NAME" />}
        </div>
        <div className="row user-bio">
          <strong><Language resource="USER.BIO" /></strong>
          {user.bio ? user.bio : <Language resource="USER.NO_BIO" />}
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
