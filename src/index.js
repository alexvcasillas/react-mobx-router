import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import mobx from 'mobx';
import { Provider } from 'mobx-react';

// Import Components
import App from './containers/app';

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Import our Stores Here
import UserStore from './stores/user';
import LanguageStore from './stores/language';
import UIStore from './stores/ui';
// Because they're classes, we have to instantiate them here :)
const userStore = new UserStore('Alex', 'Casillas', 26, 0);
const languageStore = new LanguageStore('en');
const uiStore = new UIStore(3, 'white');

const store = {
  user: userStore,
  language: languageStore,
  ui: uiStore
};

const router = (
  <Provider {...store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
