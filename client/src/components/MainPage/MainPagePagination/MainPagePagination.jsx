import {useSelector, useDispatch} from 'react-redux'
import { appSelector, setPage } from '../../../redux/appReducer';
import './MainPagePagination.css';

export default function MainPagePagination() {

    const {page, totalPages} = useSelector(appSelector);
    const dispatch = useDispatch();

    let displayPages = [];
    let active = null;

    for(let i = 0; i < totalPages; i++) {
        if(page === i + 1) {
            active = 'Active'
        } else {
            active = null;
        };
        displayPages.push(<div key={i} className={active} onClick={() => dispatch(setPage(i + 1))}>{i + 1}</div>)
    }


    return <div className="MainPagePagination">
        {displayPages}
    </div>
}