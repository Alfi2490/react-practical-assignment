import { useSelector, useDispatch } from "react-redux";
import { appSelector, setPosts, setTotalPages} from "../../../redux/appReducer";
import './MainPageGalleryOfPosts.css';
import { useEffect } from "react";
import getPostByPages from "../../../api/apiGetPostByPages";
import Post from "../Post/Post";

export default function MainPageGalleryOfPosts() {

    const {posts, page} = useSelector(appSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        getPostByPages(page).then(res => {
            dispatch(setTotalPages(res.totalPages));
            dispatch(setPosts(res.result));
        });
    },[dispatch, page] ) 

    return <div className="MainPageGalleryOfPosts">
        {posts.map(p => <Post key={p.id} id={p.id} post={p}/>)}
    </div>
}