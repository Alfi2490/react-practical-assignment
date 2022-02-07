import {useEffect} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { appSelector } from './redux/appReducer';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import CreatePostModal from './components/MainPage/CreatePostModal/CreatePostModal';

function App() {

  const { isLogged, modalWindow } = useSelector(appSelector);

  useEffect(() => {
    // TEST API, it might be removed
    fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
      console.log('API CONNECTION IS OK');
    }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'));    

  }, []);

  return (
    <div className="App">
      {isLogged ? <MainPage/> : <LoginPage/>}
      {modalWindow === 'CreatePostModal' && <CreatePostModal />}     
    </div>
  );
}

export default App;
