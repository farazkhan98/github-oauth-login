import React, { useContext, useEffect } from 'react';
import Repos from './Repos';
import RepoContext from '../../context/Repos/RepoContext';

const RepoPage = ({ match }) => {
  const repoContext = useContext(RepoContext);

  const { repos, getUserRepos, getUser } = repoContext;

  useEffect(() => {
    getUser();
    getUserRepos();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='container' style={{ marginTop: '40px' }}>
      <div>
        <a
          href='http://localhost:3000/'
          className='waves-effect waves-light btn right'
        >
          Log Out
        </a>
        <br />
        <br />
      </div>
      <div>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h4>User Repos</h4>
          </li>

          <Repos repos={repos} />
        </ul>
      </div>
    </div>
  );
};

export default RepoPage;
