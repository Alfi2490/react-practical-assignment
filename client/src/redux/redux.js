import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appReducer';
import createPostModalReducer from './createPostModalReducer';

const rootReducer = combineReducers({
    app:appReducer,
    createPostModal: createPostModalReducer
});

const store = configureStore({reducer: rootReducer});

export default store;