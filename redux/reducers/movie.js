import { constantCreator } from '../../utils/constantCreator';
import api from '../../utils/api';

const PLUS = 'PLUS';
const constant = constantCreator('movie');
const GET_MOVIES = constant('GET_MOVIES', true);
const GET_MOVIE_DETAIL = constant('GET_MOVIES_DETAIL', true);
// const GET_FEATURE_PRODUCTS = constant('GET_FEATURE_PRODUCTS', true);
// const GET_FEATURE_PAPER = constant('GET_FEATURE_PAPER', true);
// const GET_SLIDER_PRODUCTS = constant('GET_SLIDER_PRODUCTS', true);

const initialState = {
  movies: [],
  movie: {},
  isMoviesLoading: false,
  errorMovies: null,
  count: 0,
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
    case 'PLUS':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  // getFeatureProducts: () => ({
  //   type: GET_FEATURE_PRODUCTS,
  //   promise: api.get('/featureProducts'),
  // }),
  // getFeaturePaper: () => ({
  //   type: GET_FEATURE_PAPER,
  //   promise: api.get('/featurePaper'),
  // }),
  getMovies: () => ({
    type: GET_MOVIES,
    promise: api.get('/movies'),
  }),
  getMovieDetail: id => ({
    type: GET_MOVIE_DETAIL,
    promise: api.get(`/movies/${id}`),
  }),
  plus: () => ({
    type: PLUS,
  }),
};
