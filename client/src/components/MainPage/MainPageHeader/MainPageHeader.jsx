import './MainPageHeader.css';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, changeUserName, changeIsLogged } from "../../../redux/appReducer"; 
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { useState } from 'react';

export default function MainPageHeader() {

    const {userName} = useSelector(appSelector);
    const dispatch = useDispatch(changeUserName());

    const [createPost, setCreatePost] = useState('NotActive');

    return <div className="MainPageHeader">
        {createPost === 'Active' && <CreatePostModal setCreatePost={setCreatePost}/>}
        <h1 onClick={() => setCreatePost('Active')}>{userName}</h1><button onClick={() => {
            dispatch(changeUserName(''));
            dispatch(changeIsLogged());
        }}>Log Out</button>
    </div>
}