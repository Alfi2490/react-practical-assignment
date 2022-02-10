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

    await createPost(title, userName)
    .then(res => dispatch(setId(res)))
    .then(() => {
      if(file !== undefined) uploadPostPicture(id, file);
    })
    .then(() => {
      getPostByPages(page)
    .then(res => {
      dispatch(setTotalPages(res.totalPages));
      dispatch(setPosts(res.result));
    });    

    dispatch(setModalWindow('None'));
    dispatch(setTitle(''));  
    });          
  }

  function onSubmitHadlerEdit(event) {
    event.preventDefault();
    updatePost(id, title, postLikes, postDislikes);
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
          <input type="text" name="title" value={title} onChange={e => dispatch(setTitle(e.target.value))}/>
          <input type="file" name="pictute" id="picture"/>
          <div className='buttonGroupe'>
            <button type='submit' >{mode === 'Edit' ? 'Edit' : 'Add'}</button>
            <button onClick={() => {
                dispatch(setTitle(''));
                dispatch(setModalWindow('None'));
                dispatch(setMode('Add'));
              }
            }>Cansel</button>
          </div>      
      </form>
    </div></div>
  }