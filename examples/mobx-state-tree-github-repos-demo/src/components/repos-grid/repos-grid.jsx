import React from 'react';
import { inject, observer } from 'mobx-react';

import UserCard from '../user-card/user-card';
import RepoCard from '../repo-card/repo-card';
import LoadingCard from '../loading-card/loading-card';

import './stylesheets/repos-grid.scss';

const ReposGrid = ({ github }) => (
  <div id="ReposGrid">
    {github.fetchingData
      ? <div style={{ width: '100%' }}>
          <LoadingCard userCard />
          <LoadingCard />
        </div>
      : null}
    {!github.fetchingData && !Object.is(github.user, null)
      ? <UserCard user={github.user} />
      : null}
    {!github.fetchingData &&
      github.repos.length !== 0 &&
      github.repos.map((repo, i) => <RepoCard key={i} repo={repo} />)}
  </div>
);

export default inject('github')(observer(ReposGrid));
