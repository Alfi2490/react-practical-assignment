import {useSelector, useDispatch} from 'react-redux'
import { appSelector, setPage } from '../../../redux/appReducer';
import './MainPagePagination.css';

export default function MainPagePagination() {

    const {page} = useSelector(appSelector);
    const dispatch = useDispatch();

    return <div className="MainPagePagination">
        <div className={page === 1 ? "Active" : null} onClick={() => dispatch(setPage(1))}>1</div>
        <div className={page === 2 ? "Active" : null} onClick={() => dispatch(setPage(2))}>2</div>
        <div className={page === 3 ? "Active" : null} onClick={() => dispatch(setPage(3))}>3</div>
    </div>
}