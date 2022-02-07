import './MainPageHeader.css';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, changeUserName, changeIsLogged, setModalWindow } from "../../../redux/appReducer"; 

export default function MainPageHeader() {

    const {userName} = useSelector(appSelector);
    const dispatch = useDispatch(changeUserName());

    return <div className="MainPageHeader">
        <h1 onClick={() => dispatch(setModalWindow('CreatePostModal')) }>{userName}</h1><button onClick={() => {
            dispatch(changeUserName(''));
            dispatch(changeIsLogged());
        }}>Log Out</button>
    </div>
}