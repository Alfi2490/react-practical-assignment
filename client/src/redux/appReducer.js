import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    isLogged: false,
    modalWindow: 'None',
    userName:'',
    posts: [],
    page: 1,
    totalPages: '',
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
        setModalWindow: (state, {payload}) => {
            state.modalWindow = payload;
        },
        setTotalPages: (state, {payload}) => {
            state.totalPages = payload;
        }
    }       
});

export default slice.reducer;

export const {
   initApp, changeUserName, changeIsLogged,setPosts, setPage, setSearch, setModalWindow, setTotalPages
} = slice.actions;

export const appSelector = state => state.app