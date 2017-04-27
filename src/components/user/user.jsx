import React from 'react';
import { observer, inject } from 'mobx-react';

import Language from '../language/language';

// Stylesheet Imports
import './stylesheets/user.scss';

const User = ({ user }) => (
  <div id="user">
    <div className="container">
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">
            {user.fullName}, <small>{user.age}</small>
          </h4>
          <h6 className="card-subtitle mb-2 text-muted">
            <Language resource="XP_TITLE" />: {user.xp}
          </h6>
          <p className="card-text">
            <Language resource="APP_DESCRIPTION" />
          </p>
          <button
            className="d-block btn btn-primary"
            onClick={() => user.increaseXp(100)}
          >
            <Language resource="ACTIONS.INCREASE_XP" />
          </button>
          <button
            className="d-block btn btn-secondary"
            onClick={() => user.changeName('John')}
          >
            <Language resource="ACTIONS.CHANGE_NAME" />
          </button>
          <button
            className="d-block btn btn-secondary"
            onClick={() => user.changeLastName('Doe')}
          >
            <Language resource="ACTIONS.CHANGE_LASTNAME" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default inject('user')(observer(User));
