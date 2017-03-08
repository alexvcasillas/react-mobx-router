import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

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
    this.props.user.changeName('Paquito');
  }

  changeLastName() {
    this.props.user.changeLastName('Perita');
  }

  render() {
    const { fullName, name, lastName, age, xp } = this.props.user;
    return (
      <div id="user">
        <div className="info">
          <div className="name">User: {fullName}</div>
          <div className="xp">XP: {xp}</div>
        </div>
        <div className="actions">
          <button onClick={this.increaseXp}>Increase Experience Points!</button>
          <button onClick={this.changeName}>Change My Name!</button>
          <button onClick={this.changeLastName}>
            Change My Last name!
          </button>
        </div>
      </div>
    );
  }
}

export default User;
