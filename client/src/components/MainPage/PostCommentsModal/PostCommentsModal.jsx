import {useSelector, useDispatch} from 'react-redux';
import {setModalWindow ,appSelector, setPosts, setTotalPages} from '../../../redux/appReducer';
import { postCommentsModalSelector, setComment, setCommentMode } from '../../../redux/postCommentsModalReducer';
import './PostCommentsModal.css';
import createComment from '../../../api/apiCreateComment';
import getPostByPages from '../../../api/apiGetPostByPages';
import updateComment from '../../../api/apiUpdateComment';

export default function PostCommentsModal() {

  const dispatch = useDispatch();
  const {comment, commentedPostId, commentMode, commentId, commentLikes, commentDislikes} = useSelector(postCommentsModalSelector);
  const {userName, page} = useSelector(appSelector);

  function addCommentAction() {
    dispatch(setModalWindow('None'));
    createComment(comment, commentedPostId, userName);
    dispatch(setComment(''));
    getPostByPages(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
  }

  function editCommentAction() {
    dispatch(setModalWindow('None'));
    updateComment(commentId, comment, commentLikes, commentDislikes);
    getPostByPages(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
  }

  return <div className='Shadow'>
    <div className="PostCommentsModal">
        <input type="text" name="comment" id="comment" value={comment} onChange={e => dispatch(setComment(e.target.value))}/>
        <button onClick={() => {
          if(commentMode === 'Add') addCommentAction();
          if(commentMode === 'Edit') editCommentAction();
            }
          }>{commentMode === 'Edit' ? 'Edit' : 'Add'}</button>
        <button onClick={() => {
          dispatch(setModalWindow('None'));
          dispatch(setComment(''));
          dispatch(setCommentMode('Add'));
          }
        }>Cancel</button>
    </div>
  </div>
}