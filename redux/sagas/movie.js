import { call, put, select, all } from 'redux-saga/effects';

import api from '../../utils/api';
import { LOAD_MOVIES, LOAD_MOVIE_DETAIL, LOAD_SEATS, PURCHASE_TICKET } from '../reducers/movie';
import { actions as appActions } from '../reducers/app';

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

export function* purchaseTicket(action) {
  try {
    const [movie, seat] = yield all([
      select(state => state.movie.movie),
      select(state => state.movie.seat),
    ]);
    const selectedSeat = seat && seat.types && seat.types.find(t => t.id === action.seatId);
    if (!selectedSeat) throw new Error('No seat selected');
    const data = {
      seatId: action.seatId,
      movieId: movie.id,
      seatTitle: selectedSeat.title,
      amount: selectedSeat.amount,
      currency: selectedSeat.currency,
    };
    const res = yield new Promise((resolve) => {
      setTimeout(() => {
        console.log(data); // Act as calling purchase api
        resolve({ data });
      }, 2000);
    });
    yield put({ type: PURCHASE_TICKET.RESOLVED });
    yield put(appActions.pushToast(true, `${res.data.seatTitle} has been purchased (${res.data.amount} ${res.data.currency})`));
  } catch (error) {
    yield put({ type: PURCHASE_TICKET.REJECTED, error: error.message });
  }
}
