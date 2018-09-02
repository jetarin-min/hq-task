import { combineReducers } from 'redux';

import app from './app';
import movie from './movie';

export default combineReducers({
  app,
  movie,
});
