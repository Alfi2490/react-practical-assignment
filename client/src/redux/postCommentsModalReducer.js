import {createSlice} from '@reduxjs/toolkit';

export const initState = {
    comment:'',
    commentedPostId:'',
    commentId: 0,
    commentLikes: [],
    commentDislikes: [],
    commentMode: 'Add',
};

const slice = createSlice({
    name:'postCommentsModal',
    initialState:initState,
    reducers:{
        setComment: (state,{payload}) => {
            state.comment = payload;
        },
        setCommentedPostId: (state, {payload}) => {
            state.commentedPostId = payload;
        },
        setCommentId: (state, {payload}) => {
            state.commentId = payload;
        },
        setCommentLikes: (state, {payload}) => {
            state.commentLikes = payload;
        },
        setCoommentDislikes: (state, {payload}) => {
            state.commentDislikes = payload;
        },
        setCommentMode: (state, {payload}) => {
            state.commentMode = payload;
        }
    }       
});

export default slice.reducer;

export const {
    setComment, setCommentedPostId, setCommentId, setCommentLikes, setCoommentDislikes, setCommentMode
} = slice.actions;

export const postCommentsModalSelector = state => state.postCommentsModal;