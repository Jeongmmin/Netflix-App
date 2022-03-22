import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import DetailPage from './Pages/DetailPage';
import SearchPage from './Pages/SearchPage';

// 라우팅을 위한 파일로 만들기
const Layout = () => {
  return (
    <div>
      <Nav />


      <Outlet />


      <Footer />

    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/" element={<Layout />} >
            <Route index element={<MainPage />}/>
            <Route path=':movieId' element={<DetailPage />}/>
            <Route path='search' element={<SearchPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
