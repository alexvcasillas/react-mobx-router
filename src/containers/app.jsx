import React from 'react';
import {Link} from 'react-router'

// Import Common Stylesheets
import '../stylesheets/common.scss';

export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="navigation">
          <Link to={'/'} className="link-to" activeClassName="active" onlyActiveOnIndex>User</Link>
          <Link to={'/realms'} className="link-to" activeClassName="active">Realms</Link>
        </div>
        {children}
      </div>
    );
  }
}
