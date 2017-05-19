import React from "react";
import { inject, observer } from "mobx-react";

import Button from "../button/button";

import "./stylesheets/search-user.css";

const SearchUser = ({ github }) => (
  <div id="SearchUser">
    <div className="content">
      <input
        onChange={event => {
          github.changeUserToSearchFor(event.target.value);
        }}
        onKeyPress={event => {
          if (event.charCode === 13) github.searchForUser();
        }}
        type="text"
        placeholder="Github username to find repositories"
        spellCheck="false"
        autoComplete="off"
      />
      <Button radius="4" onClick={() => github.searchForUser()}>Search</Button>
    </div>
  </div>
);

export default inject("github")(observer(SearchUser));
