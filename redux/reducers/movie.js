import { constantCreator } from '../../utils/constantCreator';

const constant = constantCreator('movie');
export const LOAD_MOVIES = constant('LOAD_MOVIES', true);
export const LOAD_MOVIE_DETAIL = constant('LOAD_MOVIE_DETAIL', true);
export const LOAD_SEATS = constant('LOAD_SEATS', true);
export const PURCHASE_TICKET = constant('PURCHASE_TICKET', true);

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
  isPurchasing: false,
  errorPurchasing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES.PENDING:
      return {
        ...state,
        isMoviesLoading: true,
        errorMovies: null,
      };
    case LOAD_MOVIES.RESOLVED:
      return {
        ...state,
        movies: action.data,
        isMoviesLoading: false,
      };
    case LOAD_MOVIES.REJECTED:
      return {
        ...state,
        isMoviesLoading: false,
        errorMovies: action.error,
      };
    case LOAD_MOVIE_DETAIL.PENDING:
      return {
        ...state,
        isMovieLoading: true,
        errorMovie: null,
      };
    case LOAD_MOVIE_DETAIL.RESOLVED:
      return {
        ...state,
        movie: action.data,
        isMovieLoading: false,
      };
    case LOAD_MOVIE_DETAIL.REJECTED:
      return {
        ...state,
        isMovieLoading: false,
        errorMovie: action.error,
      };
    case LOAD_SEATS.PENDING:
      return {
        ...state,
        isSeatLoading: true,
        errorSeat: null,
      };
    case LOAD_SEATS.RESOLVED:
      return {
        ...state,
        seat: action.data,
        isSeatLoading: false,
      };
    case LOAD_SEATS.REJECTED:
      return {
        ...state,
        isSeatLoading: false,
        errorSeat: action.error,
      };
    case PURCHASE_TICKET.PENDING:
      return {
        ...state,
        isPurchasing: true,
        errorPurchasing: null,
      };
    case PURCHASE_TICKET.RESOLVED:
      return {
        ...state,
        isPurchasing: false,
      };
    case PURCHASE_TICKET.REJECTED:
      return {
        ...state,
        errorPurchasing: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  loadMovies: () => ({
    type: LOAD_MOVIES.PENDING,
  }),
  loadMovieDetail: id => ({
    type: LOAD_MOVIE_DETAIL.PENDING,
    id,
  }),
  loadSeats: id => ({
    type: LOAD_SEATS.PENDING,
    id,
  }),
  purchaseTicket: seatId => ({
    type: PURCHASE_TICKET.PENDING,
    seatId,
  }),
};
