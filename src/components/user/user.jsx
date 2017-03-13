import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Language from '../language/language';

// Stylesheet Imports
import './stylesheets/user.scss';

@inject('user')
@observer
class User extends Component {
  constructor(props) {
    super(props);
    this.increaseXp = this.increaseXp.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
  }

  increaseXp() {
    this.props.user.increaseXp(100);
  }

  changeName() {
    this.props.user.changeName('John');
  }

  changeLastName() {
    this.props.user.changeLastName('Doe');
  }

  render() {
    const { fullName, age, xp } = this.props.user;
    return (
      <div id="user">
        <div className="container">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">
                {fullName}, <small>{age}</small>
              </h4>
              <h6 className="card-subtitle mb-2 text-muted">
                <Language resource="XP_TITLE" />: {xp}
              </h6>
              <p className="card-text">
                <Language resource="APP_DESCRIPTION" />
              </p>
              <button
                className="d-block btn btn-primary"
                onClick={this.increaseXp}
              >
                <Language resource="ACTIONS.INCREASE_XP" />
              </button>
              <button
                className="d-block btn btn-secondary"
                onClick={this.changeName}
              >
                <Language resource="ACTIONS.CHANGE_NAME" />
              </button>
              <button
                className="d-block btn btn-secondary"
                onClick={this.changeLastName}
              >
                <Language resource="ACTIONS.CHANGE_LASTNAME" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
