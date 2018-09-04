import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// import promiseMiddleware from './middlewares/promiseMiddleware'; Deprecated
import reducer from './reducers';
import rootSaga from './sagas';
import configs from '../configs';

const { isProduction } = configs;
const sagaMiddleware = createSagaMiddleware();

export default initialStore => {
  const middlewares = (!isProduction && typeof window !== 'undefined' && window && window.devToolsExtension)
    ? compose(
      // applyMiddleware(promiseMiddleware, sagaMiddleware), Deprecated
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension(),
    )
    // : compose(applyMiddleware(promiseMiddleware, sagaMiddleware)); Deprecated
    : compose(applyMiddleware(sagaMiddleware));
  const store = createStore(
    reducer,
    initialStore,
    middlewares,
  );
  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  store.runSagaTask();
  return store;
};
