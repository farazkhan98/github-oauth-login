import { GET_REPOS, GET_USER, SET_LOADING } from '../types';

const RepoReducer = (state, action) => {
  switch (action.type) {
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default RepoReducer;
