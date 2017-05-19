import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import mobx from "mobx";
import { Provider } from "mobx-react";
// Service Worker for PWA
import serviceWorkerRegister from "./registerServiceWorker";
// Import our Stores Here
import UserStore from "./stores/user";
import LanguageStore from "./stores/language";
import GithubStore from "./stores/github";
// Import Components
import App from "./containers/app";

// Execute the ServiceWorker
serviceWorkerRegister();

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Create React Router Browser History
const history = createBrowserHistory();

// Because they're classes, we have to instantiate them here :)
const userStore = UserStore.create({
  id: "1",
  name: "Alex",
  lastName: "Casillas",
  age: 27,
  xp: 0
});
const languageStore = LanguageStore.create({ language: "en" });
const githubStore = GithubStore.create();
const store = {
  user: userStore,
  language: languageStore,
  github: githubStore
};

const router = (
  <Provider {...store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
