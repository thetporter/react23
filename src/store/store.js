import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postReducer } from './Reducers/postReducer';

const rootReducer = combineReducers({
    posts: postReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));