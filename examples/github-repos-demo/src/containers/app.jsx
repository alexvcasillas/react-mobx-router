import React from 'react';
import DevTools from 'mobx-react-devtools';

import Header from '../components/header/header';
import SearchUser from '../components/search-user/search-user';
import ReposGrid from '../components/repos-grid/repos-grid';

// Import Common Stylesheets
import '../stylesheets/common.scss';

const App = () => (
  <div id="app">
    <DevTools />
    <Header />
    <SearchUser />
    <ReposGrid />
  </div>
);

export default App;
