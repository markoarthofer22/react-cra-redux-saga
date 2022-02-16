import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const actionDispatch = (type: string, payload?: any): any =>
    store.dispatch({ type, payload });

sagaMiddleware.run(rootSaga);
