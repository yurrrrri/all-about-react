import { Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<MainPage />} />
          <Route path="search" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
