import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const composedEnhancer = compose(applyMiddleware(thunk))

const myStore = createStore(reducer,composedEnhancer);

export default myStore;