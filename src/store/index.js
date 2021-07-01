import rootSaga from './modules/rootSaga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
