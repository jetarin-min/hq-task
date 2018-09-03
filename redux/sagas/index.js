import { takeLatest } from 'redux-saga';
import { loadMovies } from './movie';
// import { loadDashboardSequenced} from './loadDashboardSequenced';
// import {loadDashboardNonSequenced} from './loadDashboardNonSequenced';
// import {loadDashboardNonSequencedNonBlocking, isolatedForecast, isolatedFlight } from './loadDashboardNonSequencedNonBlocking';

import { LOAD_MOVIES } from '../reducers/movie';

function* rootSaga() {
  yield [
    // takeLatest('LOAD_DASHBOARD_NON_SEQUENCED', loadDashboardNonSequenced),
    // takeLatest('LOAD_DASHBOARD_NON_SEQUENCED_NON_BLOCKING', loadDashboardNonSequencedNonBlocking),
    takeLatest(LOAD_MOVIES.PENDING, loadMovies),
  ];
}

export default rootSaga;
