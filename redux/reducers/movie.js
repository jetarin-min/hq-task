// import { constantCreator } from '~/utils/constantsCreator';
// import api from '~/utils/api';

const PLUS = 'PLUS';
// const constant = constantCreator('home');
// const GET_FEATURE_PRODUCTS = constant('GET_FEATURE_PRODUCTS', true);
// const GET_FEATURE_PAPER = constant('GET_FEATURE_PAPER', true);
// const GET_SLIDER_PRODUCTS = constant('GET_SLIDER_PRODUCTS', true);

const initialState = {
  movies: [],
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_FEATURE_PRODUCTS.RESOLVED:
    //   return {
    //     ...state,
    //     featureProducts: action.data,
    //   };
    // case GET_FEATURE_PAPER.RESOLVED:
    //   return {
    //     ...state,
    //     featurePaper: action.data
    //   };
    // case GET_SLIDER_PRODUCTS.RESOLVED:
    //   return {
    //     ...state,
    //     sliderProducts: action.data,
    //   };
    case 'PLUS':
      return {
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
  // getSliderProducts: () => ({
  //   type: GET_SLIDER_PRODUCTS,
  //   promise: api.get('/sliderProducts'),
  // }),
  plus: () => ({
    type: PLUS,
  }),
};
