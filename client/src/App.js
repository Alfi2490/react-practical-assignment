import {useEffect} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { appSelector } from './redux/appReducer';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import CreatePostModal from './components/MainPage/CreatePostModal/CreatePostModal';
import PostCommentsModal from './components/MainPage/PostCommentsModal/PostCommentsModal'

function App() {

  const { isLogged, modalWindow } = useSelector(appSelector);

  useEffect(() => {
    fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'));    

  }, []);

  return (
    <div className="App">
      {isLogged ? <MainPage/> : <LoginPage/>}
      {modalWindow === 'CreatePostModal' && <CreatePostModal />}
      {modalWindow === 'PostCommentsModal' && <PostCommentsModal />}     
    </div>
  );
}

export default App;
