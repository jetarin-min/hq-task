import { all, takeLatest } from 'redux-saga/effects';

import { loadMovies, loadMovieDetail, loadSeats, purchaseTicket } from './movie';
import { LOAD_MOVIES, LOAD_MOVIE_DETAIL, LOAD_SEATS, PURCHASE_TICKET } from '../reducers/movie';

function* rootSaga() {
  yield all([
    takeLatest(LOAD_MOVIES.PENDING, loadMovies),
    takeLatest(LOAD_MOVIE_DETAIL.PENDING, loadMovieDetail),
    takeLatest(LOAD_SEATS.PENDING, loadSeats),
    takeLatest(PURCHASE_TICKET.PENDING, purchaseTicket),
  ]);
}

export default rootSaga;
