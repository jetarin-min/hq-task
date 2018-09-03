import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import promiseMiddleware from './middlewares/promiseMiddleware';
import reducer from './reducers';
import rootSaga from './sagas';
import configs from '../configs';

const { isProduction } = configs;
const sagaMiddleware = createSagaMiddleware();

export default initialStore => {
  const middlewares = (!isProduction && typeof window !== 'undefined' && window && window.devToolsExtension)
    ? compose(
      applyMiddleware(promiseMiddleware, sagaMiddleware),
      window.devToolsExtension(),
    )
    : compose(applyMiddleware(promiseMiddleware, sagaMiddleware));
  const store = createStore(
    reducer,
    initialStore,
    middlewares,
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
