import './MainPageSearchBar.css';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, setSearch, setPage, setPosts, setTotalPages } from "../../../redux/appReducer";
import searchPost from '../../../api/apiSearchPost';
import getPostByPages from '../../../api/apiGetPostByPages';
import { useState } from 'react';

export default function MainPageSearchBar() {

    const {search, page} = useSelector(appSelector);
    const dispatch = useDispatch();

    const [noResult, setNoResult] = useState('');

    function handleEnterPress(event) {
        if(event.key === "Enter") {
            setNoResult('');
            if(search === '') {
                dispatch(setPage(1));
                getPostByPages(page).then(res => {
                    dispatch(setTotalPages(res.totalPages));
                    dispatch(setPosts(res.result));
                });
                return
            }
            searchPost(search).then(res => {
                    dispatch(setTotalPages(0))
                    if(res.result.length === 0) setNoResult('No posts!')
                    dispatch(setPosts(res.result));                    
                }
            );            
        }
    }

    return <div className="MainPageSearchBar">
        <input className='MainPageSearchBarInput' type="text" value={search} onChange={e => dispatch(setSearch(e.target.value))} onKeyPress={(e) => handleEnterPress(e)}/>
        <p>{noResult}</p>
    </div>
}