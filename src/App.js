import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import SearchPage from "./Pages/SearchPage";
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
`;

// 라우팅을 위한 파일로 만들기
const Layout = () => {
  return (
    <Wrapper>
      <Nav />

      <Outlet />

      <Footer />
    </Wrapper>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
