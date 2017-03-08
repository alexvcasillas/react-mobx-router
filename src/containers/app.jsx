import React from 'react';
import {Link} from 'react-router'

// Import Common Stylesheets
import '../stylesheets/common.scss';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>
          <Link to={'/'}>User</Link>
          <Link to={'/realms'}>Realms</Link>
        </div>
        {children}
      </div>
    );
  }
}
