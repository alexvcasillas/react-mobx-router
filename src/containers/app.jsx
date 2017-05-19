import React from "react";
import DevTools from "mobx-react-devtools";

import Header from "../components/header/header";
import User from "../components/user/user";

// Import Common Stylesheets
import "../stylesheets/common.css";

const App = () => (
  <div id="app">
    <DevTools />
    <Header />
    <User />
  </div>
);

export default App;
