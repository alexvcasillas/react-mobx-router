import fetch from 'node-fetch';
import { observable, action, runInAction } from 'mobx';

export default class GithubStore {
  @observable searchName;
  @observable user;
  @observable repos;
  @observable fetchingData;

  constructor() {
    this.searchName = '';
    this.user = '';
    this.repos = [];
    this.fetchingData = false;
  }

  async fetchFromGithub(endpoint) {
    const url = `https://api.github.com${endpoint}?client_id=my_client_id&client_secret=my_secret_id`;
    const response = await fetch(url);
    return await response.json();
  }

  @action('Change User to search for')
  changeUserToSearchFor(username) {
    this.searchName = username;
  }

  @action('Search for user on Github')
  searchForUser = async () => {
    if (!this.searchName || (this.user && this.searchName === this.user.login))
      return;
    this.fetchingData = true;
    const [user, repos] = await Promise.all([
      this.fetchFromGithub(`/users/${this.searchName}`),
      this.fetchFromGithub(`/users/${this.searchName}/repos`)
    ]);
    runInAction("Update State after fetching Github's Data", () => {
      this.user = user;
      this.repos = repos;
      this.fetchingData = false;
    });
  };
}
