import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
    trace: true,
  }) : compose;


const configurStore = () => {
  const store = createStore(rootReducer, composeEnhancers());
  return store;
};


export default configurStore;
