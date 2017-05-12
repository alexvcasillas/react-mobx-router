import React from 'react';
import { observer, inject } from 'mobx-react';

import Language from '../language/language';
import Button from '../button/button';

// Stylesheet Imports
import './stylesheets/user.scss';

const User = ({ user, ui }) => (
  <div id="user">
    <div className="container">
      <div className="info">
        <div className="name">
          {user.fullName}, <small>{user.age}</small>
        </div>
        <div className="xp">
          <Language resource="XP_TITLE" />:
          {` `}
          <span style={{ color: user.xp >= 1000 ? '#FF8E53' : '#000000' }}>
            {user.xp}
          </span>
        </div>
        <div className="description">
          <p>
            <Language resource="APP_DESCRIPTION" />
          </p>
        </div>
      </div>
      <div className="actions">
        <Button radius={ui.borderRadius} onClick={() => user.increaseXp(100)}>
          <Language resource="ACTIONS.INCREASE_XP" />
        </Button>
        <Button
          radius={ui.borderRadius}
          color={ui.textColor}
          onClick={() => user.changeName('John')}
        >
          <Language resource="ACTIONS.CHANGE_NAME" />
        </Button>
        <Button
          radius={ui.borderRadius}
          color={ui.textColor}
          onClick={() => user.changeLastName('Doe')}
        >
          <Language resource="ACTIONS.CHANGE_LASTNAME" />
        </Button>
        <Button
          radius={ui.borderRadius}
          color={ui.textColor}
          onClick={() => ui.changeBorderRadius(50)}
        >
          CHANGE BORDER RADIUS: {ui.borderRadius}
        </Button>
      </div>
    </div>
  </div>
);

export default inject('user', 'ui')(observer(User));
