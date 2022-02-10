import { useSelector, useDispatch } from "react-redux";
import { appSelector, setModalWindow, setPosts } from "../../../redux/appReducer";
import deleteComment from "../../../api/apiDeleteComment";
import getPostByPages from "../../../api/apiGetPostByPages";
import updateComment from "../../../api/apiUpdateComment";
import {setComment, setCommentId, setCommentLikes, setCoommentDislikes, setCommentMode} from '../../../redux/postCommentsModalReducer';


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

    return <div>
        <p>{comment.text}</p>
        <p>{commentDate}</p>
        <div>
            {comment.username === userName ? <>
                <button onClick={() => editCommentAction()}>Edit</button>
                <button onClick={() => deleteCommentAction(comment.id)}>Delete</button>
            </> : <>
                <button onClick={() => likeCommentAction(comment.id)}>Like</button>
                <p>{comment.likes.length - comment.dislikes.length}</p>
                <button onClick={() => dislikeCommentAction(comment.id)}>Dislike</button>
            </>}
            
        </div>
    </div>
}