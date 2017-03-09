import React from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Language from '../components/language/language';

// Import Common Stylesheets
import '../stylesheets/common.scss';

@inject('language')
@observer
export default class App extends React.Component {
  changeLanguage(language) {
    this.props.language.changeLanguageTo(language);
  }

  render() {
    const { language, children } = this.props;
    return (
      <div id="app">
        <DevTools />
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href="#">react-mobx-router</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={language.currentLanguage === 'es' ? 'nav-item active' : 'nav-item'}>
                <a
                  className="nav-link pointer"
                  onClick={this.changeLanguage.bind(this, 'es')}
                >
                  <Language resource="CHANGE_SPANISH" />
                </a>
              </li>
              <li className={language.currentLanguage === 'en' ? 'nav-item active' : 'nav-item'}>
                <a
                  className="nav-link pointer"
                  onClick={this.changeLanguage.bind(this, 'en')}
                >
                  <Language resource="CHANGE_ENGLISH" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </div>
    );
  }
}
