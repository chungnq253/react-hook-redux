import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
    trace: true,
  }) : compose;

const sagaMiddleware = createSagaMiddleware();

const configurStore = () => {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);
  return store;
};


export default configurStore;
