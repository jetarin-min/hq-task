import { call, put } from 'redux-saga/effects';

import api from '../../utils/api';
import { LOAD_MOVIES, LOAD_MOVIE_DETAIL, LOAD_SEATS } from '../reducers/movie';

export function* loadMovies() {
  try {
    const res = yield call(api.get, '/movies');
    yield put({ type: LOAD_MOVIES.RESOLVED, data: res.data });
  } catch (error) {
    yield put({ type: LOAD_MOVIES.REJECTED, error: error.message });
  }
}

export function* loadMovieDetail(action) {
  try {
    const res = yield call(api.get, `/movies/${action.id}`); // TODO put router into store, then select id query by "select"
    yield put({ type: LOAD_MOVIE_DETAIL.RESOLVED, data: res.data });
  } catch (error) {
    yield put({ type: LOAD_MOVIE_DETAIL.REJECTED, error: error.message });
  }
}

export function* loadSeats(action) {
  try {
    const res = yield call(api.get, `/seats/${action.id}`);
    yield put({ type: LOAD_SEATS.RESOLVED, data: res.data });
  } catch (error) {
    yield put({ type: LOAD_SEATS.REJECTED, error: error.message });
  }
}
