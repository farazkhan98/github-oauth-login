import React, { useContext } from 'react';
import RepoContext from '../../context/Repos/RepoContext';

const RepoItem = ({ repo }) => {
  const repoContext = useContext(RepoContext);

  const { user } = repoContext;

  const { name, created_at } = user;
  return (
    <li className='collection-item'>
      <h4>
        <strong>Name</strong>: {name}
      </h4>
      <h6>
        <strong>Date and time</strong>: {created_at}
      </h6>
      {repo.full_name}
      <a href={repo.html_url} className='secondary-content'>
        <i className='fas fa-external-link-alt' />
      </a>
    </li>
  );
};

export default RepoItem;
