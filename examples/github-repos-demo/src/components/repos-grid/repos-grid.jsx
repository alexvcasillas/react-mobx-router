import React from 'react';
import { inject, observer } from 'mobx-react';

import RepoCard from '../repo-card/repo-card';
import LoadingCard from '../loading-card/loading-card';

import './stylesheets/repos-grid.scss';

const ReposGrid = ({ github }) => (
  <div id="ReposGrid">
    {github.fetchingData
      ? <LoadingCard>
          <div className="content">Fetching data from Github ...</div>
        </LoadingCard>
      : null}
    {!github.fetchingData &&
      github.repos.length != 0 &&
      github.repos.map((repo, i) => <RepoCard key={i} repo={repo} />)}
  </div>
);

export default inject('github')(observer(ReposGrid));
