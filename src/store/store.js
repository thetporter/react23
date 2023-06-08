import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postReducer } from './Reducers/postReducer';
import { userReducer } from './Reducers/userReducer';
import { activeUserReducer } from './Reducers/activeUserReducer'

const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
    auser: activeUserReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));