import { useSelector, useDispatch } from "react-redux";
import { appSelector, setPosts} from "../../../redux/appReducer";
import './MainPageGalleryOfPosts.css';
import deletePost from "../../../api/apiDeletePost";

export default function MainPageGalleryOfPosts() {

    const {posts, userName} = useSelector(appSelector);
    const dispatch = useDispatch();

    function likeClickHandler(id){
        let tmp = [...posts];
        let post = tmp.filter(p => p.id === id);
        console.log(post);
    };

    function deletePostAction(id) {
        let tmp = [...posts];
        tmp = tmp.filter(p => p.id !== id);
        dispatch(setPosts(tmp));
        deletePost(id).then(res => console.log(res));
    }


    return <div className="MainPageGalleryOfPosts">
        {posts.map((p,i) => <div key={i} id={p.id} className="Post">
            <h1>{p.title}</h1> 
            <h2>{p.username}</h2>
            <button onClick={() => likeClickHandler(p.id)}>Like</button>
            <button onClick={() => {}}>Dislike</button>
            <button onClick={() => deletePostAction(p.id)}>Delete</button>
        </div>)}
    </div>
}