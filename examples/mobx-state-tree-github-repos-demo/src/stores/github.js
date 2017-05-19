import fetch from "node-fetch";
import { types } from "mobx-state-tree";

const UserModel = types.model(
  "UserModel",
  {
    name: types.maybe(types.string),
    bio: types.maybe(types.string),
    avatar: types.maybe(types.string)
  },
  {}
);

const GithubStore = types.model(
  "GithubStore",
  {
    searchName: types.optional(types.string, ""),
    user: types.optional(types.maybe(UserModel), null), // Object with all the user data that comes from the Github API Fetch
    repos: types.optional(types.array(types.frozen), []), // Array of Repositories that comes from the Github API Fetch
    fetchingData: types.optional(types.boolean, false)
  },
  {
    changeUserToSearchFor(username) {
      this.searchName = username;
    },
    fetchFromGithub(endpoint) {
      return new Promise((resolve, reject) => {
        const url = `https://api.github.com${endpoint}?client_id=my_client_id&client_secret=my_client_secret`;
        fetch(url).then(response => {
          response.json().then(result => {
            resolve(result);
          });
        });
      });
    },
    setFetchedData(user, repos) {
      const userModel = UserModel.create({
        name: user.name,
        bio: user.bio,
        avatar: user.avatar_url
      });
      this.user = userModel;
      this.repos = repos;
      this.fetchingData = false;
    },
    searchForUser() {
      const store = this;
      if (
        !this.searchName ||
        (this.user && this.searchName === this.user.login)
      )
        return;
      this.fetchingData = true;
      Promise.all([
        this.fetchFromGithub(`/users/${this.searchName}`),
        this.fetchFromGithub(`/users/${this.searchName}/repos`)
      ]).then(function(result) {
        const [user, repos] = result;
        store.setFetchedData(user, repos);
      });
    }
  }
);

export default GithubStore;
