import {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, setPosts } from './redux/appReducer';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import getPostByPages from './api/apiGetPostByPages';

function App() {

  const { isLogged, page } = useSelector(appSelector);

  const dispatch = useDispatch()

  useEffect(() => {
    // TEST API, it might be removed
    fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'));

    getPostByPages(page).then(res => dispatch(setPosts(res.result)));

  }, [page, dispatch]);

  return (
    <div className="App">
      {isLogged ? <MainPage/> : <LoginPage/>}
    </div>
  );
}

export default App;
