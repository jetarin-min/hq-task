import { constantCreator } from '../../utils/constantCreator';

const constant = constantCreator('app');
const LOADING = constant('LOADING');
const LOADED = constant('LOADED');
const PUSH_TOAST = constant('PUSH_TOAST');

const initialState = {
  isLoading: false,
  isShowToast: false,
  toastMessage: '',
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
    case PUSH_TOAST:
      return {
        ...state,
        isLoading: false,
        isShowToast: action.isShowToast,
        toastMessage: action.toastMessage || state.toastMessage,
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
  pushToast: (isShowToast = true, toastMessage) => ({
    type: PUSH_TOAST,
    isShowToast,
    toastMessage,
  }),
};
