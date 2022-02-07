import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    title:'',
    id:'',
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
       }
    }       
});

export default slice.reducer;

export const {
    setTitle,setId, setPicture
} = slice.actions;

export const createPostModalSelector = state => state.createPostModal