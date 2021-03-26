import React from 'react';

const Login = () => {
  return (
    <div className='container' style={{ marginTop: '200px' }}>
      <div className='col s12 m6'>
        <div className='card blue-grey darken-1'>
          <div className='card-content white-text'>
            <span className='card-title center'>Welcome</span>
            <p className='center'>Login to go to your Github profile</p>
          </div>
          <div className='card-action'>
            <a
              href='https://github.com/login/oauth/authorize?client_id=aa4dc7e3e3fa6da1d088'
              className='waves-effect waves-light btn'
              style={{ width: '100%' }}
            >
              <i className='fab fa-github' /> Login with Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
