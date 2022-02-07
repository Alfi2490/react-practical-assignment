import './MainPageSearchBar.css';
import { useSelector, useDispatch } from "react-redux";
import { appSelector, setSearch, setPage } from "../../../redux/appReducer";

export default function MainPageSearchBar() {

    const {search} = useSelector(appSelector);
    const dispatch =useDispatch();

    function handleEnterPress(event) {
        if(event.key === "Enter") {
            dispatch(setPage(1));
            console.log(search);
        }
    }

    return <div className="MainPageSearchBar">
        <input type="text" value={search} onChange={e => dispatch(setSearch(e.target.value))} onKeyPress={(e) => handleEnterPress(e)}/>
    </div>
}