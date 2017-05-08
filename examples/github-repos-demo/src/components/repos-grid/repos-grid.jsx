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
          <LoadingCard userPlaceholder><div className="content" /></LoadingCard>
          <LoadingCard repoPlaceholder><div className="content" /></LoadingCard>
        </div>
      : null}
    {!github.fetchingData && github.user
      ? <UserCard user={github.user} />
      : null}
    {!github.fetchingData &&
      github.repos.length !== 0 &&
      github.repos.map((repo, i) => <RepoCard key={i} repo={repo} />)}
  </div>
);

export default inject('github')(observer(ReposGrid));
