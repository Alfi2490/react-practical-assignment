import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    isLogged: false,
    userName:'',
    posts: [],
    page: 1,
    search: '',
};

const slice = createSlice({
    name:'app',
    initialState:initState,
    reducers:{
        changeUserName: (state, {payload}) => {
            state.userName = payload;
        },
        changeIsLogged: state => {
            state.isLogged = !state.isLogged;
        },
        setPosts: (state, {payload}) => {
            state.posts = payload;
        },
        setPage: (state, {payload}) => {
            state.page = payload;
        },
        setSearch: (state, {payload}) => {
            state.search = payload;
        },
    }       
});

export default slice.reducer;

export const {
   initApp, changeUserName, changeIsLogged,setPosts, setPage, setSearch
} = slice.actions;

export const appSelector = state => state.app