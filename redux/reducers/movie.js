import { constantCreator } from '../../utils/constantCreator';
import api from '../../utils/api';

const constant = constantCreator('movie');
export const LOAD_MOVIES = constant('LOAD_MOVIES', true);
//
export const GET_MOVIES = constant('GET_MOVIES', true);
export const GET_MOVIE_DETAIL = constant('GET_MOVIES_DETAIL', true);
export const GET_SEAT = constant('GET_SEAT', true);

const initialState = {
  movies: [],
  isMoviesLoading: false,
  errorMovies: null,
  movie: {},
  isMovieLoading: false,
  errorMovie: null,
  seat: {},
  isSeatLoading: false,
  errorSeat: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES.PENDING:
      return {
        ...state,
        isMoviesLoading: true,
        errorMovies: null,
      };
    case GET_MOVIES.RESOLVED:
      return {
        ...state,
        movies: action.data,
        isMoviesLoading: false,
        errorMovies: null,
      };
    case GET_MOVIES.REJECTED:
      return {
        ...state,
        isMoviesLoading: false,
        errorMovies: action.error,
      };
    case GET_MOVIE_DETAIL.PENDING:
      return {
        ...state,
        isMovieLoading: true,
        errorMovie: null,
      };
    case GET_MOVIE_DETAIL.RESOLVED:
      return {
        ...state,
        movie: action.data,
        isMovieLoading: false,
        errorMovie: null,
      };
    case GET_MOVIE_DETAIL.REJECTED:
      return {
        ...state,
        isMovieLoading: false,
        errorMovie: action.error,
      };
    case GET_SEAT.PENDING:
      return {
        ...state,
        isSeatLoading: true,
        errorSeat: null,
      };
    case GET_SEAT.RESOLVED:
      return {
        ...state,
        seat: action.data,
        isSeatLoading: false,
        errorSeat: null,
      };
    case GET_SEAT.REJECTED:
      return {
        ...state,
        isSeatLoading: false,
        errorSeat: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  getMovies: () => ({
    type: GET_MOVIES,
    promise: api.get('/movies'),
  }),
  getMovieDetail: id => ({
    type: GET_MOVIE_DETAIL,
    promise: api.get(`/movies/${id}`),
  }),
  getSeat: id => ({
    type: GET_SEAT,
    promise: api.get(`/seats/${id}`),
  }),
  loadMovies: () => ({
    type: LOAD_MOVIES.PENDING,
    name: 'kkk',
  }),
};
