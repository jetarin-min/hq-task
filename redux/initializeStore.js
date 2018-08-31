import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from './middlewares/promiseMiddleware';
import reducer from './reducers';
import configs from '../configs';

const { isProduction } = configs;

export default initialStore => {
  const storeCreator = (!isProduction && typeof window !== 'undefined' && window && window.devToolsExtension)
    ? compose(
      applyMiddleware(thunkMiddleware, promiseMiddleware),
      window.devToolsExtension(),
    )
    : compose(applyMiddleware(thunkMiddleware, promiseMiddleware));
  return createStore(
    reducer,
    initialStore,
    storeCreator,
  );
};
