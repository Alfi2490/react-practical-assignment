import './CreatePostModal.css';
import createPost from '../../../api/apiCreatePost';
import {useSelector, useDispatch} from 'react-redux';
import {appSelector, setModalWindow, setPosts, setTotalPages} from '../../../redux/appReducer';
import {createPostModalSelector, setId, setTitle, setMode} from '../../../redux/createPostModalReducer';
import getPostByPages from '../../../api/apiGetPostByPages';
import updatePost from '../../../api/apiUpdatePost';
import uploadPostPicture from '../../../api/apiUploadPostPicture';

export default function CreatePostModal() {

  const {userName, page} = useSelector(appSelector);
  const {title, mode, postLikes, postDislikes, id} = useSelector(createPostModalSelector);
  const dispatch = useDispatch();

  async function onSubmitHandler(event) {
    event.preventDefault();
    let file = document.getElementById('picture').files[0];
    await createPost(title, userName).then(res => {
      setId(res);
      if(file !== undefined) uploadPostPicture(res, file).then(() => 
      {
        getPostByPages(page).then(res => {
          dispatch(setTotalPages(res.totalPages));
          dispatch(setPosts(res.result));
        }); 
      }); 
    }); 
    getPostByPages(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });  
    dispatch(setModalWindow('None'));
    dispatch(setTitle(''));           
  }

  async function onSubmitHadlerEdit(event) {
    event.preventDefault();
    let file = document.getElementById('picture').files[0];
    await updatePost(id, title, postLikes, postDislikes).then(() => {
      if(file !== undefined) uploadPostPicture(id, file).then(() => 
      {
        getPostByPages(page).then(res => {
          dispatch(setTotalPages(res.totalPages));
          dispatch(setPosts(res.result));
        }); 
      }); 
    }); 
    getPostByPages(page).then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });
    dispatch(setModalWindow('none'));
    dispatch(setMode('Add'));
  }

  return <div className='Shadow'>
  <div className="CreatePostModal">
      <form 
        onSubmit={(e) => {
        if(mode === 'Add') onSubmitHandler(e);
        if(mode === 'Edit') onSubmitHadlerEdit(e)
      }}
        className='CreatePostModalForm'>
          <h4 className='Window'>Create Post</h4>
          <input className='FormInput' type="text" name="title" value={title} onChange={e => dispatch(setTitle(e.target.value))}/>
          <input className='FormFileInput' type="file" name="pictute" id="picture"/>
          <div className='buttonGroupe'>
            <button type='submit' >{mode === 'Edit' ? 'Edit' : 'Add'}</button>
            <button className='Cansel' onClick={() => {
                dispatch(setTitle(''));
                dispatch(setModalWindow('None'));
                dispatch(setMode('Add'));
              }
            }>Cansel</button>
          </div>      
      </form>
    </div></div>
  }