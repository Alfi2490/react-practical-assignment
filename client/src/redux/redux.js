import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appReducer';
import createPostModalReducer from './createPostModalReducer';
import postCommentsModalReducer from './postCommentsModalReducer';

const rootReducer = combineReducers({
    app:appReducer,
    createPostModal: createPostModalReducer,
    postCommentsModal: postCommentsModalReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;