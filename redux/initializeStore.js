import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import promiseMiddleware from './middlewares/promiseMiddleware';
import reducer from './reducers';

export default initialStore => {
  const storeCreator = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window && window.devToolsExtension)
    ? compose(
      applyMiddleware(thunkMiddleware),
      window.devToolsExtension(),
    )
    : compose(applyMiddleware(thunkMiddleware));
  return createStore(
    reducer,
    initialStore,
    storeCreator,
  );
};
