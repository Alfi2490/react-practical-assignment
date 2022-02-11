import './LoginPage.css';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { appSelector, changeUserName, changeIsLogged } from '../../redux/appReducer';

export default function LoginPage() {

    const {userName} = useSelector(appSelector);
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    return <div className='LoginPage'>
        <input className="LoginPageInput" type="text" value={userName} onChange={e => dispatch(changeUserName(e.target.value.trim()))}/>
        <button className="LoginPageButton" onClick={() => {
            if(userName === '') {
                setError('Enter User Name!');
                return
            }
            dispatch(changeIsLogged());
        }
            }>Login</button>
        {error && <h3 className='LoginPageWarning'>{error}</h3>}
    </div>
}