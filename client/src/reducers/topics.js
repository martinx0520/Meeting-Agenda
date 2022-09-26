import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../actionTypes';

export default (topics = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...topics, action.payload];
    case UPDATE:
      return topics.map((topic) => (topic._id === action.payload._id ? action.payload : topic));
    case DELETE:
      return topics.filter((topic) => topic._id !== action.payload);
    default:
      return topics;
  }
};