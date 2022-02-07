import './CreatePostModal.css';
import createPost from '../../../api/apiCreatePost';
import {useSelector, useDispatch} from 'react-redux';
import {appSelector} from '../../../redux/appReducer';
import {createPostModalSelector, setId, setTitle} from '../../../redux/createPostModalReducer';

export default function CreatePostModal(props) {

  const {userName} = useSelector(appSelector);
  const {title} = useSelector(createPostModalSelector);
  const dispatch = useDispatch();

  async function onSubmitHandler(event) {
    event.preventDefault();
    await createPost(title, userName)
    .then(res => {
      dispatch(setId(res))}); 
  }

  return <div className="CreatePostModal">
      <form onSubmit={(e) => onSubmitHandler(e) }
            className='CreatePostModalForm'>
        <input type="text" name="title" value={title} onChange={e => dispatch(setTitle(e.target.value))}/>
        <input type="file" name="pictute" id="picture"/>
        <div className='buttonGroupe'>
          <button type='submit' >Add</button>
          <button onClick={() => props.setCreatePost('NotActive')}>Cansel</button>
        </div>      
      </form>
    </div>
  }