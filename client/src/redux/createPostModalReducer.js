import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    title:'',
    id:'',
    mode:'Add',
    postLikes: [],
    postDislikes: []
};

const slice = createSlice({
    name:'createPostModal',
    initialState:initState,
    reducers:{
       setTitle: (state, {payload}) => {
           state.title = payload;
       },
       setId: (state, {payload}) => {
           state.id = payload
       },
       setMode: (state, {payload}) => {
           state.mode = payload
       },
       setPostLikes: (state, {payload}) => {
           state.postLikes = payload
       },
       setPostDislikes: (state, {payload}) => {
        state.postDislikes = payload
    },
    }       
});

export default slice.reducer;

export const {
    setTitle, setId, setMode, setPostLikes, setPostDislikes
} = slice.actions;

export const createPostModalSelector = state => state.createPostModal