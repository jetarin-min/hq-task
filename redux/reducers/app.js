import { constantCreator } from '../../utils/constantCreator';

const constant = constantCreator('app');
const LOADING = constant('LOADING');
const LOADED = constant('LOADED');

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

export const actions = {
  loading: () => ({
    type: LOADING,
  }),
  loaded: () => ({
    type: LOADED,
  }),
};
