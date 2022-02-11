import './MainPageHeader.css';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, changeUserName, changeIsLogged, setModalWindow, setPage } from "../../../redux/appReducer"; 

export default function MainPageHeader() {

    const {userName} = useSelector(appSelector);
    const dispatch = useDispatch(changeUserName());

    return <div className="MainPageHeader">
        <h1 className='MainPageHeaderUser' onClick={() => dispatch(setModalWindow('CreatePostModal')) }>{userName}</h1>
        <button className='MainPageHeaderButton' onClick={() => {
            dispatch(changeUserName(''));
            dispatch(changeIsLogged());
            dispatch(setPage(1));
        }}>Log Out</button>
    </div>
}