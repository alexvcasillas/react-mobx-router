import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import mobx from 'mobx';
import { Provider } from 'mobx-react';

// Import Components
import App from './containers/app';
import User from './components/user/user';

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Routing to store in MobX
const routingStore = new RouterStore();

// Create a Custom History Object
const history = syncHistoryWithStore(browserHistory, routingStore);

// Import our Stores Here
import UserStore from './stores/user';
import LanguageStore from './stores/language';
// Because they're classes, we have to instantiate them here :)
const userStore = new UserStore('Alex', 'Casillas', 26, 0);
const languageStore = new LanguageStore('en');

const store = {
  user: userStore,
  language: languageStore,
  routes: routingStore
}

const router = (
  <Provider {...store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={User} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
