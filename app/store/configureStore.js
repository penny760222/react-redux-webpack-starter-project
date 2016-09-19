import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  let createStoreWithMiddleware;
  if (process.env.NODE_ENV !== 'production') {
    createStoreWithMiddleware = compose(
      applyMiddleware(reduxImmutableStateInvariant()),
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(thunk),
    )(createStore);
  }

  const store = createStoreWithMiddleware(rootReducer, initialState);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
