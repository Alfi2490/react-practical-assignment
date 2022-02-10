import { useSelector, useDispatch } from "react-redux";
import { appSelector, setPosts, setModalWindow , setTotalPages} from "../../../redux/appReducer";
import deletePost from "../../../api/apiDeletePost";
import './Post.css';
import updatePost from '../../../api/apiUpdatePost';
import getPostByPages from '../../../api/apiGetPostByPages';
import { setCommentedPostId } from "../../../redux/postCommentsModalReducer";
import { useState } from "react";
import CommentSection from "../CommentSection/CommentSection";
import { setMode, setTitle, setId, setPostDislikes, setPostLikes } from "../../../redux/createPostModalReducer";

export default function Post(props) {

    let post = props.post;

    const {page, userName} = useSelector(appSelector);
    const dispatch = useDispatch();

    const [commentSectionVision, setCommentsSectionVision] = useState('none');
    
    let postDate = new Date(parseInt(post.date));
    let dateFinal = postDate.toString('dd MM yyyy');

    async function deletePostAction(id) {
        await deletePost(id);
        await getPostByPages(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    }

    function likePostAction(id) {
        let likes = [...post.likes];
        likes.push(1);
        updatePost(id, post.title, likes, post.dislikes);
        getPostByPages(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    }

    function dislikePostAction(id) {
        let dislikes = [...post.dislikes];
        dislikes.push(1);
        updatePost(id, post.title, post.likes, dislikes);
        getPostByPages(page).then(res => dispatch(setPosts(res.result)));
    }

    function editPostAction() {
        dispatch(setMode('Edit'));
        dispatch(setModalWindow('CreatePostModal'));
        dispatch(setTitle(post.title));
        dispatch(setId(post.id));
        dispatch(setPostLikes(post.likes));
        dispatch(setPostDislikes(post.dislikes));
    }

    return <div className="Post">

        <h1>{post.title}</h1>
        <img src={post.imageSrc} alt="post" /> 
        <p>{dateFinal}</p>
        <h2>{post.username}</h2>

        <div className="LikeGroupe">
            <button onClick={() => likePostAction(post.id)}>Like</button>
            <h3>{post.likes.length - post.dislikes.length}</h3>
            <button onClick={() => dislikePostAction(post.id)}>Dislike</button>  
        </div>

        <div className="ButtonsGroupe">

            <button 
                className="AddCommentButton" 
                onClick={() => {
                    dispatch(setModalWindow('PostCommentsModal'));
                    dispatch(setCommentedPostId(post.id));
                }
            }>Add Comment</button>
            <button onClick={() => {setCommentsSectionVision('block')}}>Comments</button>  

            {userName === post.username && <>
                <button className="DeleteButton" onClick={() => deletePostAction(post.id)}>Delete</button>
                <button onClick={() => editPostAction()}>Edit post</button>
            </>}

        </div>

        <CommentSection 
            comments={post.comments} 
            commentSectionVision={commentSectionVision} 
            setCommentsSectionVision={setCommentsSectionVision} 
        />
                 
    </div>
}