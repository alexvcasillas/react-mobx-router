import React from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Language from '../components/language/language';
import Header from '../components/header/header';
import User from '../components/user/user';

// Import Common Stylesheets
import '../stylesheets/common.scss';

const App = () => (
  <div id="app">
    <DevTools />
    <Header />
    <User />
  </div>
);

export default App;
