// import { call, put, select, take } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { LOAD_MOVIES } from '../reducers/movie';
// import {loadDeparture, loadFlight, loadForecast } from './apiCalls';

// export const getUserFromState = (state) => state.user;

export function* loadMovies() {
  try {
    const res = yield call(api.get, '/movies/1');
    yield put({ type: LOAD_MOVIES.RESOLVED, payload: res.data });
  } catch (error) {
    yield put({ type: LOAD_MOVIES.REJECTED, error: error.message });
  }
}

export const x = {};
