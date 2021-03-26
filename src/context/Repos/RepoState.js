import React, { useReducer } from 'react';
import RepoContext from './RepoContext';
import RepoReducer from './RepoReducer';
import axios from 'axios';
import { GET_USER, GET_REPOS, SET_LOADING } from '../types';

const RepoState = (props) => {
  const initialState = {
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RepoReducer, initialState);

  //GET USER
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //GET REPOS
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <RepoContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        getUser,
        getUserRepos,
        setLoading,
      }}
    >
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoState;
