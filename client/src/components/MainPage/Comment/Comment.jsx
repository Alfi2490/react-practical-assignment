import { useSelector, useDispatch } from "react-redux";
import { appSelector, setModalWindow, setPosts } from "../../../redux/appReducer";
import deleteComment from "../../../api/apiDeleteComment";
import getPostByPages from "../../../api/apiGetPostByPages";
import updateComment from "../../../api/apiUpdateComment";
import {setComment, setCommentId, setCommentLikes, setCoommentDislikes, setCommentMode} from '../../../redux/postCommentsModalReducer';
import './Comment.css';

export default function Comment(props) {

    const {userName, page} = useSelector(appSelector);
    const dispatch = useDispatch();
    
    let comment = props.comment;

    let date = new Date(parseInt(comment.date));
    let commentDate = date.toString('dd MM yyy');

    function deleteCommentAction(id){
        deleteComment(id);
        getPostByPages(page).then(res => dispatch(setPosts(res.result)));
    }

    function likeCommentAction(id) {
        let likes = [...comment.likes];
        likes.push(1);
        updateComment(id, comment.text, likes, comment.dislikes);
        getPostByPages(page).then(res => dispatch(setPosts(res.result)));
    }

    function dislikeCommentAction(id) {
        let dislikes = [...comment.dislikes];
        dislikes.push(1);
        updateComment(id, comment.text, comment.likes, dislikes);
        getPostByPages(page).then(res => dispatch(setPosts(res.result)));
    }

    function editCommentAction() {
        dispatch(setCommentMode('Edit'));
        dispatch(setComment(comment.text));
        dispatch(setCommentId(comment.id));
        dispatch(setCommentLikes(comment.likes));
        dispatch(setCoommentDislikes(comment.dislikes));
        dispatch(setModalWindow('PostCommentsModal'));
    }

    return <div className="Comment">
        <p className="CommentText">{comment.text}</p>
        <p className="CommentDate">{commentDate.slice(0,24)}</p>
        <div className="CommentButtons">            

                <button onClick={() => likeCommentAction(comment.id)}>Like</button>
                <p>{comment.likes.length - comment.dislikes.length}</p>
                <button onClick={() => dislikeCommentAction(comment.id)}>Dislike</button>

            {comment.username === userName && <>
                <button onClick={() => editCommentAction()}>Edit</button>
                <button onClick={() => deleteCommentAction(comment.id)}>Delete</button>      </>}
            </div>
    </div>
}